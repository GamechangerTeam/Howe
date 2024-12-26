<script setup lang="ts">
definePageMeta({
  hideFooter: true,
});
import { toTypedSchema } from "@vee-validate/zod";
import { CreditCard } from "lucide-vue-next";
import { useForm } from "vee-validate";
import * as z from "zod";

import { ref } from "vue";
import { useCartStore } from "~/store/cart-store";

// Состояние для хранения значения
const cardEnd = ref("");

const formatCardEnd = (value: string): string => {
  // Удаляем все нецифровые символы
  value = value.replace(/\D/g, "");

  // Форматируем: первые 2 цифры, затем `/`, затем 2 цифры
  if (value.length > 2) {
    value = value.slice(0, 2) + "/" + value.slice(2, 4);
  }

  // Возвращаем максимум 5 символов (включая `/`)
  return value.slice(0, 5);
};

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  cardEnd.value = formatCardEnd(target.value);
};

// Определение схемы валидации с использованием zod
const formSchema = toTypedSchema(
  z.object({
    phone: z.number().min(1, "Поле не может быть пустым"),
    name: z.string().min(1, "Поле не может быть пустым").max(50, "Не больше 50 символов"),
    secondName: z.string().min(1, "Поле не может быть пустым").max(50, "Не больше 50 символов"),
    address: z.string().min(1, "Поле не может быть пустым").max(50, "Не больше 50 символов"),
    city: z.string().min(1, "Поле не может быть пустым").max(50, "Не больше 50 символов"),
    postCode: z.number().max(50, "Не больше 50 символов").optional(),
    region: z.string().min(1, "lox"),
  })
);

// Настройка формы с использованием vee-validate
const { handleSubmit, isFieldDirty, errors } = useForm({
  validationSchema: formSchema,
});

// Обработчик отправки формы
const onSubmit = handleSubmit((values) => {
  console.log(values);
});

const { items } = useCartStore();
</script>

<template>
  <div class="container" id="order-page">
    <form @submit="onSubmit" class="flex relative flex-col gap-4 tablet:grid tablet:grid-cols-2 tablet-big:gap-8 laptop:gap-20 ">
      <div class="flex flex-col gap-4 tablet:sticky tablet:top-[100px] tablet:h-fit">
        <h1 class="text-4xl mb-2">Контакт</h1>
        <FormField v-slot="{ field, errors }" name="phone" :validate-on-blur="!isFieldDirty">
          <FormItem>
            <Input class="text-black" type="number" placeholder="Номер телефона" v-bind="field" />
            <FormMessage>{{ errors[0] }}</FormMessage>
          </FormItem>
        </FormField>
        <h2 class="text-4xl mb-2 mt-8 mobile">Доставка</h2>

        <div class="delivery-wrapper flex flex-col gap-4">
          <FormField v-slot="{ field, errors }" name="region">
            <FormItem>
              <Select v-bind="field">
                <SelectTrigger
                  class="flex-1 mobile-min:max-w-none h-auto py-3 px-4 text-sm rounded-[8px] space"
                >
                  <SelectValue placeholder="Регион" />
                </SelectTrigger>
                <SelectContent class="bg-primary-white rounded-[12px]">
                  <SelectGroup class="[&>div]:text-base">
                    <SelectItem value="apple"> Apple </SelectItem>
                    <SelectItem value="banana"> Banana </SelectItem>
                    <SelectItem value="blueberry"> Blueberry </SelectItem>
                    <SelectItem value="grapes"> Grapes </SelectItem>
                    <SelectItem value="pineapple"> Pineapple </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage>{{ errors[0] }}</FormMessage>
            </FormItem>
          </FormField>

          <FormField v-slot="{ field, errors }" name="name" :validate-on-blur="!isFieldDirty">
            <FormItem>
              <Input type="text" placeholder="Имя" v-bind="field" />
              <FormMessage>{{ errors[0] }}</FormMessage>
            </FormItem>
          </FormField>

          <FormField v-slot="{ field, errors }" name="secondName" :validate-on-blur="!isFieldDirty">
            <FormItem>
              <Input type="text" placeholder="Фамилия" v-bind="field" />
              <FormMessage>{{ errors[0] }}</FormMessage>
            </FormItem>
          </FormField>

          <FormField v-slot="{ field, errors }" name="address" :validate-on-blur="!isFieldDirty">
            <FormItem>
              <Input type="text" placeholder="Адрес" v-bind="field" />
              <FormMessage>{{ errors[0] }}</FormMessage>
            </FormItem>
          </FormField>

          <FormField v-slot="{ field, errors }" name="city" :validate-on-blur="!isFieldDirty">
            <FormItem>
              <Input type="text" placeholder="Город" v-bind="field" />
              <FormMessage>{{ errors[0] }}</FormMessage>
            </FormItem>
          </FormField>

          <FormField v-slot="{ field, errors }" name="postCode" :validate-on-blur="!isFieldDirty">
            <FormItem>
              <Input type="number" placeholder="Почтовый индекс" v-bind="field" />

              <FormMessage>{{ errors[0] }}</FormMessage>
            </FormItem>
          </FormField>
        </div>

        <FormField v-slot="field" name="remember">
          <FormItem class="flex items-center gap-2">
            <Checkbox :isSquare="true" class="rounded-[4px]" v-bind="field" id="remember" />
            <label class="!mt-0 text-sm text-primary-black-400" for="remember"
              >Сохранить для будущих доставок</label
            >
          </FormItem>
        </FormField>

        <h2 class="text-4xl mt-8 mb-2">Оплата</h2>

        <div class="card-wrapper">
          <Accordion type="single" class="w-full" collapsible>
            <AccordionItem value="d" class="border-0 p-0">
              <AccordionTrigger
                class="border border-solid rounded-t-[12px] border-primary-black-300 py-3 px-4"
                >Кредитная карта
                <CreditCard :size="20" class="ml-auto mr-2 !rotate-0" />
              </AccordionTrigger>
              <AccordionContent class="bg-primary-white-100 px-4 py-3 flex flex-col gap-2">
                <FormField v-slot="field" name="cardNum">
                  <FormItem>
                    <Input
                      type="text"
                      placeholder="Номер карты"
                      class="!bg-primary-white"
                      v-bind="field"
                    />
                  </FormItem>
                </FormField>
                <div class="flex [&>div]:w-full">
                  <FormField v-slot="field" name="cardEnd">
                    <FormItem>
                      <Input
                        type="text"
                        placeholder="Дата окончания"
                        class="rounded-r-none border-r-0 !bg-primary-white"
                        :value="cardEnd"
                        @input="onInput"
                      />
                    </FormItem>
                  </FormField>
                  <FormField v-slot="field" name="cardCvv">
                    <FormItem>
                      <Input
                        type="password"
                        placeholder="CVV"
                        class="rounded-l-none !bg-primary-white"
                        v-bind="field"
                      />
                    </FormItem>
                  </FormField>
                </div>
                <FormField v-slot="field" name="cardName">
                  <FormItem>
                    <Input
                      type="text"
                      placeholder="Имя на карте "
                      class="!bg-primary-white"
                      v-bind="field"
                    />
                  </FormItem>
                </FormField>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <Button type="submit" class="mt-5"
          ><NuxtImg src="/icons/bill.svg" width="20" height="20" /> Оформить заказ</Button
        >
      </div>

      <div class="flex flex-col gap-4 mt-20 bg-primary-white-100 rounded-[12px] basePadding tablet:m-0 tablet:px-4 ">
        <ul class="flex flex-col gap-3 mobile-big:grid mobile-big:grid-cols-2 tablet:flex pc:grid">
          <li>
            <CartItem />
          </li>
          <li>
            <CartItem />
          </li>
          <li>
            <CartItem />
          </li>
        </ul>
        <div class="line">
          <hr />
        </div>
        <div class="flex flex-col gap-4 w-full">
          <p class="flex items-center justify-between text-lg">Итого <span>15,000 KZT</span></p>
          <p class="flex items-center justify-between text-lg">Доставка <span>АДРЕС</span></p>
          <p class="flex items-center justify-between text-xl font-bold">
            Всего: <span>15,000 KZT</span>
          </p>
        </div>
        <div class="line">
          <hr />
        </div>
        <div class="flex my-4">
          <Input
            type="text"
            class="rounded-r-none h-full border-none !bg-primary-white"
            placeholder="Ввод промокода"
          />
          <Button class="rounded-l-none text-sm px-3 w-fit"> Использовать </Button>
        </div>
        <div class="warning-message py-8 px-9 bg-primary-blue-gradient">
          <p class="text-lg text-primary-white">
            Из-за огромного спроса возможна задержка доставки до 5 рабочих дней. Они стоят того,
            чтобы подождать - обещаем! XO, команда Howe
          </p>
        </div>
        <div class="mt-4">
          <h2 class="text-xl">Рекомендованные</h2>
          <SwiperRecommendationSwiper id="order-recommendation" :slides="items">
            <template #default="{ slide }">
              <RecommendationCard />
            </template>
          </SwiperRecommendationSwiper>
        </div>
      </div>
    </form>

    <p class="mt-5 text-sm text-center text-primary-black-400">
      Copyright © 2024 Howl. All Rights Reseved.
    </p>
  </div>
</template>

<style lang="scss">
@use "~/assets/css/components" as *;

#order-page {
  .delivery-wrapper {
    @include mobile {
      display: grid;
      grid-template-columns: 1fr 1fr;
      .space-y-2 {
        &:first-child {
          grid-column-start: 2 span;
        }
        &:nth-child(4) {
          grid-column-start: 2 span;
        }
      }
    }
  }
  .btns-wrapper  {
    @include tablet {
      flex-direction: column;
    }
    @include pc {
      flex-direction: row;
    }
  }
  .line {
    width: 100%;
    flex-shrink: 0;
    height: 1px;
    hr {
      border: none;
      height: 1px;
      background: linear-gradient(to right, $primary-black-300 50%, transparent 50%);
      background-size: 10px 100%;
      width: calc(100% + 24px);
      transform: translateX(-12px);
      margin: 0;
    }

    &--first {
      hr {
        transform: unset;
      }
    }
  }
  .warning-message {
    width: calc(100% + 24px);
    transform: translateX(-12px);
    @include mobile-big {
      width: calc(100% + 32px);
      transform: translateX(-16px);
    }
  }

  .swiper-pagination {
    bottom: 0;
    @include tablet {
      bottom: 20px;
    }
  }
}
</style>
