export default {
  name: 'referenceProject',
  title: 'Saját Kivitelezés (Képek)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Cím (pl. Derecske Társasház)',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Helyszín (pl. Derecske, Zrínyi utca)',
      type: 'string',
    },
    // --- ÚJ MEZŐ 1: Munka típusa ---
    {
      name: 'workType',
      title: 'Elvégzett munka típusa (pl. Generálkivitelezés, Teljeskörű festés, Homlokzat)',
      type: 'string',
      initialValue: 'Generálkivitelezés' // Ez lesz az alapértelmezett
    },
    // --- ÚJ MEZŐ 2: Egyedi leírás ---
    {
      name: 'description',
      title: 'Rövid leírás a munkáról (Ez jelenik meg a modálban)',
      type: 'text',
      rows: 3,
      description: 'Írd le pár mondatban mit csináltatok itt. Pl: "Az étterem teljes belső díszítőfestése..."'
    },
    {
      name: 'image',
      title: 'Borítókép (Ez látszik a kártyán)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'gallery',
      title: 'További képek (Galéria)',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      }
    }
  ],
}