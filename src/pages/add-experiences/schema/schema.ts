import { z } from 'zod';

export const generalInfoSchema = z.object({
  title: z.string().min(1, '제목을 입력해 주세요'),
  category: z.string().min(1, '카테고리를 선택해 주세요'),
  description: z.string().min(1, '설명을 입력해 주세요'),
  price: z
    .string()
    .regex(/^\d+$/, '가격을 입력해 주세요')
    .transform(val => Number(val))
    .optional(),
  address: z.string().min(1, '주소를 선택해주세요'),
  schedules: z
    .array(
      z.object({
        date: z.string().min(1),
        startTime: z.string().min(1),
        endTime: z.string().min(1),
      })
    )
    .min(1, '* 최소 하나 이상의 스케줄을 등록해주세요'),
});

export type GeneralInfoFormValues = z.infer<typeof generalInfoSchema>;
