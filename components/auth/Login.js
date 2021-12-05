import { Leading, Title } from 'components/common'
import Button from 'components/form/button/Button'
import CheckBox from 'components/form/checkbox/CheckBox'
import React from 'react'
import { LoginContainer } from '.'

function Login() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <LoginContainer>
            <form onSubmit={handleSubmit}>
                <Leading fontSize={16}>Авторизоваться</Leading>
                <Title left fontSize={24} mt={12} mb={8}>
                    OneID - уникальная система идентификации
                </Title>
                <Leading fontSize={16}>делается насквозь.</Leading>
                <Leading fontSize={16} my={24}>
                    Внимание! Доступ к системе через OneID - уникальная система
                    идентификации означает, что вы соглашаетесь на передачу
                    принадлежащих вам личных данных на этот портал посредством
                    единой системы идентификации.
                </Leading>
                <CheckBox label="Я согласен с условиями использования портала." />
                <Button primary>Авторизоваться</Button>
                <p>
                    Copyright © 2021{' '}
                    <a href="/">Давергеодезкадастр қўмитаси.</a>
                </p>
            </form>
        </LoginContainer>
    )
}

export default Login
