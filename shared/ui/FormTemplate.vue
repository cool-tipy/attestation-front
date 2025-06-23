<script setup lang="ts">
import type { FormSubmitEvent } from "@nuxt/ui";
import * as v from "valibot";

const props = defineProps<{
  schema?: v.BaseSchema<any, any, any>;
  state: Record<string, any>;
}>();

const emit = defineEmits<{
  (e: "submit", event: FormSubmitEvent<any>): void;
}>();

const toast = useToast();

async function handleSubmit(event: FormSubmitEvent<typeof props.state>) {
  toast.add({
    title: "Удачно",
    description: "Ты теперь смешарик",
    color: "success",
  });
  console.log(event.data);
  emit("submit", event);
}
</script>

<template>
  <ClientOnly>
    <UForm
      ref="formRef"
      :schema="schema"
      :state="state"
      @submit.prevent="handleSubmit"
      class="flex w-full flex-col gap-4 rounded-lg p-4 shadow-xl"
    >
      <slot></slot>
    </UForm>
  </ClientOnly>
</template>
