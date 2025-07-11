<script setup lang="ts">
import * as v from 'valibot'
import AUTH_FAKE_DATA from '~/consts/fake.auth.data'
import CustomInput from '~/shared/ui/CustomInput.vue'
import FormTemplate from '~/shared/ui/FormTemplate.vue'

const toast = useToast()
const token = useCookie('token')

const schema = v.object({
	login: v.pipe(v.string('Логин не смешарик')),
	password: v.pipe(v.string(), v.minLength(8, 'Пароль не смешарик')),
})

const state = reactive({
	login: '',
	password: '',
})

function handleAuth() {
	if (
		(state.login === AUTH_FAKE_DATA.login,
		state.password === AUTH_FAKE_DATA.password)
	) {
		toast.show({
			title: 'Успешно',
			message: `Добро пожаловать, ${state.login}`,
			color: '#b8fec0',
		})
		token.value = 'true'
		navigateTo('/home')
	} else {
		toast.show({
			title: 'Что то пошло не так',
			message: `Ошибка авторизации, проверьте логин и пароль`,
			color: '#ff6666',
		})
	}
}
</script>

<template>
	<FormTemplate
		@submit="handleAuth"
		:schema="schema"
		:state="state"
		class="flex flex-col gap-10"
	>
		<UFormField name="login">
			<CustomInput
				containerStyle="transition duration-300 focus-within:shadow-md-purple"
				icon="lucide:circle-user-round"
				placeholder="Email или Логин"
				v-model="state.login"
			/>
		</UFormField>

		<UFormField name="password">
			<CustomInput
				containerStyle="transition duration-300 focus-within:shadow-md-green"
				icon="lucide:key-round"
				placeholder="Пароль"
				type="password"
				v-model="state.password"
			/>
		</UFormField>

		<div class="flex justify-between">
			<button
				type="submit"
				class="bg-primary-gray-300 cursor-pointer transition-colors duration-300 text-xl font-normal text-primary-white-200 hover:bg-primary-green-200 hover:text-primary-gray-400 rounded-xl h-13 w-[225px]"
			>
				Логин
			</button>

			<NuxtLink to="register">
				<button
					type="button"
					class="bg-primary-gray-300 transition-colors duration-300 text-xl font-normal text-primary-white-200 hover:bg-primary-purple-200 hover:text-primary-white-100 rounded-xl h-13 w-[225px]"
				>
					Регистрация
				</button>
			</NuxtLink>
		</div>
	</FormTemplate>
</template>

<style scoped></style>
