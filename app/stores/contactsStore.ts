import { defineStore } from "pinia";
import { ref, computed } from "vue";

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  age: number;
  picture: string;
  gender: string;
  eyeColor: string;
  isActive: boolean;
  address: string;
}

export const useContactsStore = defineStore("contacts", () => {
  // State
  const contacts = ref<Contact[]>([]);
  const pending = ref(false);
  const error = ref<Error | null>(null);

  // Computed
  const totalContacts = computed(() => contacts.value.length);
  const activeContacts = computed(() =>
    contacts.value.filter((c) => c.isActive),
  );
  const inactiveContacts = computed(() =>
    contacts.value.filter((c) => !c.isActive),
  );

  // Actions
  const addContacts = async (newContacts: Contact[]) => {
    contacts.value = newContacts;
  };

  const getContactById = (id: number): Contact | undefined => {
    return contacts.value.find((c) => c.id === id);
  };

  const clearError = () => {
    error.value = null;
  };

  return {
    // State
    contacts,
    pending,
    error,

    // Computed
    totalContacts,
    activeContacts,
    inactiveContacts,

    // Actions
    addContacts,
    getContactById,
    clearError,
  };
});
