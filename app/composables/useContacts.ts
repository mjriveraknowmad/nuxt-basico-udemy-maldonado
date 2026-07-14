import type { Contact } from '~/stores/contactsStore'
import { useContactsStore } from '~/stores/contactsStore'

export { type Contact }

export const useContacts = () => {
    const store = useContactsStore()
    const fetchContacts = async () => {
        store.pending = true
        store.error = null
        try {
            const data = await $fetch<Contact[]>('http://localhost:3001/contacts')
            store.addContacts(data || [])
        } catch (err) {
            store.error = err instanceof Error ? err : new Error('Error fetching contacts')
        } finally {
            store.pending = false
        }
    }
    
    // Fetch contacts only on client-side (prevents SSR hydration mismatch)
    onMounted(async () => {
        await fetchContacts()
    })
    
    return {
        contacts: computed(() => store.contacts),
        pending: computed(() => store.pending),
        error: computed(() => store.error),
        totalContacts: computed(() => store.totalContacts),
        activeContacts: computed(() => store.activeContacts),
        inactiveContacts: computed(() => store.inactiveContacts),
        getContactById: store.getContactById,
    }
}

