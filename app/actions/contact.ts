'use server'

import { Resend } from 'resend'

type ContactPayload = {
  name: string
  email: string
  phone: string
  message: string
}

export async function sendContactEmail(data: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) throw new Error('Brak RESEND_API_KEY w zmiennych środowiskowych.')

  const resend = new Resend(apiKey)

  const recipient = process.env.CONTACT_EMAIL ?? 'kontakt@hometria.pl'

  const { error } = await resend.emails.send({
    from: 'Formularz Hometria <formularz@hometria.pl>',
    to: recipient,
    replyTo: data.email,
    subject: `Nowe zapytanie od ${data.name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
        <div style="background:#E6007E;padding:24px 32px;border-radius:12px 12px 0 0">
          <h1 style="margin:0;color:#fff;font-size:20px;font-weight:700">Nowe zapytanie — Hometria</h1>
        </div>
        <div style="background:#f9f9f9;padding:32px;border:1px solid #eee;border-top:none;border-radius:0 0 12px 12px">
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:8px 0;color:#666;font-size:13px;width:130px;vertical-align:top">Imię i nazwisko</td>
              <td style="padding:8px 0;font-weight:600;font-size:14px">${data.name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#666;font-size:13px;vertical-align:top">E-mail</td>
              <td style="padding:8px 0;font-size:14px"><a href="mailto:${data.email}" style="color:#E6007E">${data.email}</a></td>
            </tr>
            ${data.phone ? `
            <tr>
              <td style="padding:8px 0;color:#666;font-size:13px;vertical-align:top">Telefon</td>
              <td style="padding:8px 0;font-size:14px">${data.phone}</td>
            </tr>` : ''}
            <tr>
              <td style="padding:8px 0;color:#666;font-size:13px;vertical-align:top">Wiadomość</td>
              <td style="padding:8px 0;font-size:14px;white-space:pre-wrap">${data.message}</td>
            </tr>
          </table>
          <div style="margin-top:24px;padding-top:16px;border-top:1px solid #eee;font-size:12px;color:#aaa">
            Wiadomość wysłana przez formularz na hometria.pl
          </div>
        </div>
      </div>
    `,
  })

  if (error) throw new Error(error.message)
}
