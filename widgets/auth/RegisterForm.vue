<script setup lang="ts">
import * as v from 'valibot'
import CustomInput from '~/shared/ui/CustomInput.vue'
import FormTemplate from '~/shared/ui/FormTemplate.vue'

const schema = v.object({
	login: v.pipe(
		v.string(),
		v.minLength(6, 'Минимум 6 символов'),
		v.custom(
			value => /^[a-zA-Z0-9_]+$/.test(value as string),
			'Только английские буквы, цифры и _ без пробелов'
		)
	),
	fullName: v.pipe(
		v.string(),
		v.minLength(15),
		v.minWords('en', 3, 'Мало букав')
	),
	email: v.pipe(v.string(), v.email('Почта не смешарик')),
	password: v.pipe(v.string(), v.minLength(8, 'Пароль не смешарик')),
	confirmedPassword: v.custom(
		value => value === state.password,
		'Пароли не совпадают'
	),
})

const state = reactive({
	login: '',
	fullName: '',
	email: '',
	password: '',
	confirmedPassword: '',
})
</script>

<template>
	<FormTemplate :schema="schema" :state="state" class="flex flex-col gap-8">
		<UFormField name="login">
			<CustomInput
				containerStyle="transition duration-300 focus-within:shadow-md-purple"
				icon="lucide:circle-user-round"
				placeholder="Логин"
				v-model="state.login"
			/>
		</UFormField>
		<UFormField name="fullName">
			<CustomInput
				containerStyle="transition duration-300 focus-within:shadow-md-green"
				icon="lucide:user-pen"
				placeholder="ФИО"
				v-model="state.fullName"
			/>
		</UFormField>
		<UFormField name="email">
			<CustomInput
				containerStyle="transition duration-300 focus-within:shadow-md-purple"
				icon="lucide:mail"
				placeholder="Email"
				v-model="state.email"
			/>
		</UFormField>
		<UFormField name="password">
			<CustomInput
				type="password"
				containerStyle="transition duration-300 focus-within:shadow-md-green"
				icon="lucide:key-round"
				placeholder="Пароль"
				v-model="state.password"
			/>
		</UFormField>
		<UFormField name="confirmedPassword">
			<CustomInput
				type="password"
				containerStyle="transition duration-300 focus-within:shadow-md-purple"
				icon="lucide:key-round"
				placeholder="Повторите пароль"
				v-model="state.confirmedPassword"
			/>
		</UFormField>

		<div class="flex flex-col gap-5 last:items-start">
			<button
				type="submit"
				class="bg-primary-gray-300 w-full transition-colors duration-300 text-xl font-normal text-primary-white-200 hover:bg-primary-purple-200 hover:text-primary-white-100 rounded-xl h-13"
			>
				Зарегистрироваться
			</button>
			<NuxtLink to="login">
				<button
					class="cursor-pointer duration-150 transition-colors text-xl text-primary-white-200 hover:text-primary-white-100"
				>
					<- Назад
				</button>
			</NuxtLink>
		</div>
	</FormTemplate>
</template>

<style scoped lang="scss"></style>
