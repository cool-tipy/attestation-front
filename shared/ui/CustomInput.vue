<script setup lang="ts">
const props = defineProps({
	modelValue: {
		type: [String, Number] as PropType<string | number>,
		default: '',
	},
	width: {
		type: Number,
		default: 500,
	},
	height: {
		type: Number,
		default: 60,
	},
	icon: {
		type: String,
		default: '',
	},
	clearable: {
		type: Boolean,
		default: false,
	},
	inputContainerStyle: {
		type: String,
		default: '',
	},
	inputComponentStyle: {
		type: String,
		default: '',
	},
})

const emit = defineEmits(['update:modelValue'])
const input = ref<HTMLInputElement | null>(null)

const handleInput = (e: Event) => {
	const target = e.target as HTMLInputElement
	emit('update:modelValue', target.value)
}

const clearInput = () => {
	emit('update:modelValue', '')
	if (input.value) input.value.focus()
}
</script>

<template>
	<div
		:style="{ width: `${props.width}px`, height: `${props.height}px` }"
		:class="inputContainerStyle"
		class="flex p-4 items-center bg-primary-gray-350 rounded-4xl"
	>
		<div class="flex flex-1/2 items-center gap-3">
			<Icon
				v-if="props.icon"
				class="left-3"
				style="color: var(--color-primary-white-150)"
				:size="props.height / 2.2"
				:name="props.icon"
			/>
			<input
				ref="input"
				:value="props.modelValue"
				@input="handleInput"
				v-bind="$attrs"
				class="bg-none m-1 text-[20px] outline-none w-full"
			/>
		</div>
		<Icon
			v-show="clearable"
			:size="props.height / 3"
			class="cursor-pointer text-primary-gray-200 transition-colors duration-150 hover:text-primary-white-150"
			name="lucide:circle-x"
			@click="clearInput"
		/>
	</div>
</template>

<style scoped lang="scss"></style>
