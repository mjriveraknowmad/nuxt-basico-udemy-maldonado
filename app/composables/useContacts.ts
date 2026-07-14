export interface Contact {
    id: number
    name: string
    email: string
    phone: string
    company: string
    age: number
    picture: string
    gender: string
    eyeColor: string
    isActive: boolean
    address: string
}

export const useContacts = () => {
    const { data: contacts, pending, error, refresh } = useFetch<Contact[]>(
        'http://localhost:3001/contacts',
        {
            immediate: true,
        }
    )

    // Ensure contacts is an array
    if (!contacts.value) {
        contacts.value = []
    }

    return {
        contacts,
        pending,
        error,
        refresh,
    }
}
