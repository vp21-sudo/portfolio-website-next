"use server"
import { headers } from "next/headers"
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from '@vercel/kv'
import { error } from "console";
import sendEmail from "@/utils/email";
const ratelimit = new Ratelimit({
    redis: kv,
    limiter: Ratelimit.slidingWindow(1, '3600 s'),
});

const handleContactMeForm = async (setState: any, formData: FormData) => {
    try {
        const headersList = headers()
        const headerField = headersList.get('x-forwarded-for') || ''
        const clientIp = headerField.split(/, /)[0]
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const message = formData.get('message') as string
        const { success } = await ratelimit.limit(
            clientIp
        );
        if (!success) return {message:"You have already sent a message. Please wait for response.", error: true}
        //send nodemailer mail
        await sendEmail({
            to: process.env.MAIL_USER || '',
            subject: `New message from ${name}`,
            text: message,
            html: `<p>Name: ${name}</p><p>email: ${email}</p><p>message: ${message}</p>`,
        })
        return {message:'Message sent successfully', error: false}
    } catch(err){
        console.log(err)
        return {message:'Something went wrong, please try again later', error: true}
    }
}


export {
    handleContactMeForm
}