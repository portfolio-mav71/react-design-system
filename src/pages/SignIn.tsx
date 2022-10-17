import { Checkbox } from "@radix-ui/react-checkbox";
import axios from "axios";
import { Envelope, Lock } from 'phosphor-react'
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Logo } from "../Logo";

export function SignIn() {

  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  async function HandleSubmitSignIn(event: FormEvent) {
    event.preventDefault();
    const response = await axios.post('/sessions', {
      email: 'test@mav71.dev',
      pass: '1234567'
    })
    setIsUserSignedIn(true);
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Mav71 Design System
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Faça Login e comece a usar!
        </Text>
      </header>

      <form onSubmit={HandleSubmitSignIn} className="flex flex-col items-stretch gap-4 w-full max-w-sm mt-10">
        { isUserSignedIn && <Text>User Logged!!!</Text> }
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">endereço de email</Text>
          <TextInput.Root>
            <TextInput.icon>
              <Envelope />
            </TextInput.icon>
            <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">sua senha</Text>
          <TextInput.Root>
            <TextInput.icon>
              <Lock />
            </TextInput.icon>
            <TextInput.Input type="password" id="password" placeholder="************" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>
        <Button type="submit">Entrar na plataforma</Button>

      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora.</a>
        </Text>
      </footer>
    </div>
  )
}