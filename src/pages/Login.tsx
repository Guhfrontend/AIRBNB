import { Link } from "react-router-dom";

export default function Login() {
    return (
        <section className="flex items-center">
            <div className="mx-auto flex max-w-96 flex-col gap-4 items-center w-full">
                <h1 className="text-3xl font-bold">Faça seu Login</h1>
                <form className="flex flex-col gap-2 w-full">
                    <input type="text" placeholder="Email" className="w-full border border-gray-300 px-4 py-2 rounded-full" />
                    <input type="password" placeholder="Senha" className="w-full border border-gray-300 px-4 py-2 rounded-full" />
                    <button type="submit" className="bg-primary w-full border border-gray-300 px-4 py-2 rounded-full">Entrar</button>
                </form>
                <p>Ainda nao tem uma conta? <Link to='/register' className="underline font-semibold">Registre-se aqui!</Link></p>
            </div>
        </section>
    )
}