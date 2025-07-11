<script setup lang="ts">
import * as v from 'valibot'
import CustomInput from '~/shared/ui/CustomInput.vue'
import FormTemplate from '~/shared/ui/FormTemplate.vue'

const schema = v.object({
	email: v.pipe(v.string(), v.email('Почта не смешарик')),
	password: v.pipe(v.string(), v.minLength(8, 'Пароль не смешарик')),
})

const state = reactive({
	email: '',
	password: '',
})
</script>

<template>
	<FormTemplate :schema="schema" :state="state" class="flex flex-col gap-10">
		<UFormField name="email">
			<CustomInput
				containerStyle="transition duration-300 focus-within:shadow-md-purple"
				icon="lucide:circle-user-round"
				placeholder="Email или Логин"
				v-model="state.email"
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
