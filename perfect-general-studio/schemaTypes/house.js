import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'house',
  title: 'Ingatlan',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Ingatlan Neve',
      type: 'string', // pl. "Modern Sorházi Otthon"
    }),
    defineField({
      name: 'status',
      title: 'Státusz',
      type: 'string',
      options: {
        list: [
          { title: 'Eladó', value: 'ELADÓ' },
          { title: 'Elkelve', value: 'ELKELVE' },
          { title: 'Tervezés alatt', value: 'TERVEZÉS ALATT' },
        ],
      },
    }),
    defineField({
      name: 'price',
      title: 'Ár (pl. 99 500 000 Ft)',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Helyszín (Város)',
      type: 'string',
    }),
    defineField({
      name: 'specs',
      title: 'Specifikációk',
      type: 'object',
      fields: [
        { name: 'area', title: 'Alapterület (m2)', type: 'string' },
        { name: 'rooms', title: 'Szobák száma', type: 'string' },
      ],
    }),
    defineField({
      name: 'extras',
      title: 'Extrák (Lista)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'description',
      title: 'Leírás',
      type: 'text',
    }),
    defineField({
      name: 'images',
      title: 'Képek',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true, // Most már jó helyen van: a képen belül!
          },
        },
      ],
      options: {
        layout: 'grid', // Ez teszi széppé, rács elrendezésűvé
      },
    }),
  ],
})