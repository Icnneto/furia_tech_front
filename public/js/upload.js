const inputDocumento = document.getElementById('documento');
const feedback = document.getElementById('feedback-validacao');
const nomeArquivo = document.getElementById('nome-arquivo');

let arquivoSelecionado = null;

inputDocumento.addEventListener('change', async () => {
  const file = inputDocumento.files[0];
  if (!file) return;

  nomeArquivo.textContent = file.name;
  arquivoSelecionado = file;
  console.log(file);

  feedback.textContent = 'Lendo documento...';

  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    
    let fullText = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map(item => item.str).join(' ');
      fullText += pageText + '\n';
    }

    feedback.textContent = 'Validando com IA...';

    const resKey = await fetch('http://localhost:3000/openai-key');
    const { apiKey } = await resKey.json();

    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'Você é um verificador de documentos.'
          },
          {
            role: 'user',
            content: `O seguinte conteúdo foi extraído de um documento PDF:\n\n${fullText}\n\nEsse documento parece ser válido para fins de identificação? Responda apenas com "Documento validado!" ou "O documento não é válido".`
          }
        ]
      })
    });

    const json = await openaiRes.json();
    const mensagem = json.choices?.[0]?.message?.content || 'Não foi possível validar o documento.';
    feedback.textContent = mensagem;

  } catch (error) {
    console.error(error);
    feedback.textContent = 'Erro ao processar o documento.';
  }
});
