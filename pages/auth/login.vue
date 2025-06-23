<script setup lang="ts">
import * as v from "valibot";
import FormTemplate from "~/shared/ui/FormTemplate.vue";

const schema = v.object({
  email: v.pipe(v.string(), v.email("Почта не смешарик")),
  password: v.pipe(v.string(), v.minLength(8, "Пароль не смешарик")),
});

const state = reactive({
  email: "",
  password: "",
});
</script>

<template>
  <NuxtLayout>
    <Suspense>
      <FormTemplate :schema="schema" :state="state" class="max-w-3xs">
        <UFormField label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormField>

        <UFormField label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormField>

        <UButton type="submit"> Submit </UButton>
      </FormTemplate>
    </Suspense>
  </NuxtLayout>
</template>
