import { store, worker } from '../types/badoryi.types';
import { Guid } from "guid-typescript";

export const stores: store[] =
    [
        {
            id: 1,
            regionId: 1,
            name: 'Бадьорий-1',
            address: 'Мартиросяна,23',
            staff: ['Менеджер', 'Касир']
        },
        {
            id: 2,
            regionId: 1,
            name: 'Бадьорий-2',
            address: 'бульвб Чоколовський,23',
            staff: ['Менеджер', 'Касир']
        }
    ]


    export const workers: worker[] = [
        {
            id: Guid.parse('45b222d9-8599-4191-ac39-496a6f37f565'),
            firstName: 'Валентина',
            secondName: 'Роззувайло',
            jobTitle: 'Адміністратор',
            isRetired: false
        },
        {
            id: Guid.parse('45b222d9-8599-4191-ac39-496a6f37f561'),
            firstName: 'Валентина-1',
            secondName: 'Роззувайло',
            jobTitle: 'Касир',
            isRetired: false
        }
    ]

