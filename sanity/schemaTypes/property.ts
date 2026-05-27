export default {
    name: 'property',
    title: 'Nieruchomość',
    type: 'document',
    fields: [
        { name: 'title', title: 'Tytuł', type: 'string' },
        { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
        { name: 'price', title: 'Cena', type: 'number' },
        { name: 'area', title: 'Powierzchnia (m2)', type: 'number' },
        { name: 'rooms', title: 'Liczba pokoi', type: 'number' },
        { name: 'location', title: 'Lokalizacja', type: 'string' },
        {
            name: 'marketType',
            title: 'Rynek',
            type: 'string',
            options: {
                list: ['Pierwotny', 'Wtórny'],
                layout: 'radio' // Wyświetli się jako wygodne radio buttony w panelu
            }
        },
        {
            name: 'category',
            title: 'Typ nieruchomości',
            type: 'string',
            options: {
                list: ['Mieszkanie', 'Dom', 'Działka', 'Lokale komercyjne']
            }
        },
        {
            name: 'mainImage',
            title: 'Zdjęcie główne (miniaturka)',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: 'gallery',
            title: 'Galeria zdjęć',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            options: { layout: 'grid' }
        },
        { name: 'isPromoted', title: 'Promowana na stronie głównej', type: 'boolean' }
    ]
}