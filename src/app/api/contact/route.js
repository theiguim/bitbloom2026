import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, whatsapp, email, company, details, investment, service } = data;

    // Configura o transporte (quem envia)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Configura o e-mail (conteúdo)
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Envia para você mesmo
      replyTo: email, // Ao clicar em responder, vai para o cliente
      subject: `🔥 Novo Lead BitBloom: ${name} [${service}]`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0071e3;">Novo Pedido de Orçamento</h2>
          <p><strong>Serviço de Interesse:</strong> ${service.toUpperCase()}</p>
          <hr />
          <h3>Dados do Cliente:</h3>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
          <p><strong>Investimento Estimado:</strong> ${investment || 'Não informado'}</p>
          <hr />
          <h3>Detalhes da Demanda:</h3>
          <p style="background: #f5f5f7; padding: 15px; border-radius: 8px;">${details}</p>
        </div>
      `,
    };

    // Envia
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'E-mail enviado com sucesso!' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json({ message: 'Erro ao enviar e-mail.' }, { status: 500 });
  }
}