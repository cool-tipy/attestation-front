<script setup lang="ts">
import * as v from 'valibot'
import CustomInput from '~/shared/ui/CustomInput.vue'

const toast = useToast()

const schema = v.object({
	email: v.pipe(v.string(), v.email('Почта не смешарик')),
	password: v.pipe(v.string(), v.minLength(8, 'Пароль не смешарик')),
})

const state = reactive({
	email: '',
	password: '',
})

function handleSuccess() {
	toast.add({
		title: 'Успешный вход!',
		color: 'success',
	})
}
</script>

<template>
	<FormTemplate
		:schema="schema"
		:state="state"
		class="flex flex-col gap-10"
		@submit="handleSuccess()"
	>
		<UFormField name="email">
			<CustomInput
				inputContainerStyle="transition duration-300 focus-within:shadow-md focus-within:shadow-primary-purple-200"
				icon="lucide:mail"
				placeholder="Email"
				v-model="state.email"
			/>
		</UFormField>

		<UFormField name="password">
			<CustomInput
				inputContainerStyle="transition duration-300 focus-within:shadow-md focus-within:shadow-primary-green-200"
				icon="lucide:key-round"
				placeholder="Password"
				type="password"
				v-model="state.password"
			/>
		</UFormField>
		<div class="flex justify-between">
			<UFormField>
				<button
					type="submit"
					class="bg-primary-gray-300 transition-colors duration-300 text-xl font-normal text-primary-gray-100 hover:bg-primary-green-200 hover:text-primary-gray-400 rounded-xl h-13 w-[225px]"
				>
					Login
				</button>
			</UFormField>
			<UFormField>
				<button
					type="button"
					class="bg-primary-gray-300 transition-colors duration-300 text-xl font-normal text-primary-gray-100 hover:bg-primary-purple-200 hover:text-primary-white-100 rounded-xl h-13 w-[225px]"
				>
					Register
				</button>
			</UFormField>
		</div>
	</FormTemplate>
</template>

<style scoped></style>
