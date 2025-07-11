<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import * as v from 'valibot'

const props = defineProps<{
	schema?: v.BaseSchema<any, any, any>
	state: Record<string, any>
	/**@prop Показывать ли дефолтное уведомление об успехе */
	isShowNotify?: boolean
}>()

const emit = defineEmits<{
	(e: 'submit', event: FormSubmitEvent<any>): void
}>()

const toast = useToast()

async function handleSubmit(event: FormSubmitEvent<typeof props.state>) {
	if (props.isShowNotify) {
		toast.show({
			title: 'Успешно',
			color: '#b8fec0',
		})
	}

	console.log(event.data)
	emit('submit', event)
}
</script>

<template>
	<ClientOnly>
		<UForm
			ref="formRef"
			:schema="schema"
			:state="state"
			@submit.prevent="handleSubmit"
		>
			<slot></slot>
		</UForm>
	</ClientOnly>
</template>
