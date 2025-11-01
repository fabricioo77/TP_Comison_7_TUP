// Datos simulados de servicios de peluquería
let mockHairServices = [
    {
        id: 1,
        name: 'Corte Clásico',
        description: 'Corte de pelo tradicional a tijera',
        duration: 30, // duración en minutos
        price: 7000,
        available: true
    },
    {
        id: 2,
        name: 'Tintura',
        description: 'Coloración completa del pelo',
        duration: 150,
        price: 40000,
        available: true
    },
    {
        id: 3,
        name: 'Degradé',
        description: 'Corte con degradado usando máquina',
        duration: 45,
        price: 8000,
        available: true
    }
];

// Simulación de delay para las respuestas
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const hairServiceAPI = {
    // Obtener todos los servicios
    async getServices() {
        await delay(300);
        return { data: mockHairServices };
    },

    // Obtener un servicio por ID
    async getServiceById(id) {
        await delay(200);
        const service = mockHairServices.find(s => s.id === id);
        if (!service) {
            throw new Error('Servicio no encontrado');
        }
        return { data: service };
    },

    // Crear un nuevo servicio
    async createService(serviceData) {
        await delay(500);
        const newService = {
            id: mockHairServices.length + 1,
            ...serviceData,
            available: true
        };
        mockHairServices.push(newService);
        return { data: newService };
    },

    // Actualizar un servicio existente
    async updateService(id, serviceData) {
        await delay(400);
        const index = mockHairServices.findIndex(s => s.id === id);
        if (index === -1) {
            throw new Error('Servicio no encontrado');
        }
        mockHairServices[index] = {
            ...mockHairServices[index],
            ...serviceData
        };
        return { data: mockHairServices[index] };
    },

    // Deshabilitar un servicio
    async disableService(id) {
        await delay(300);
        const index = mockHairServices.findIndex(s => s.id === id);
        if (index === -1) {
            throw new Error('Servicio no encontrado');
        }
        mockHairServices[index].available = false;
        return { 
            data: { 
                message: 'Servicio deshabilitado',
                service: mockHairServices[index]
            }
        };
    },

    // Eliminar un servicio permanentemente
    async deleteService(id) {
        await delay(300);
        const index = mockHairServices.findIndex(s => s.id === id);
        if (index === -1) {
            throw new Error('Servicio no encontrado');
        }
        const deletedService = mockHairServices[index];
        mockHairServices = mockHairServices.filter(s => s.id !== id);
        return { 
            data: { 
                message: 'Servicio eliminado permanentemente',
                success: true,
                service: deletedService
            }
        };
    },

    // Restaurar un servicio (marcarlo como disponible)
    async restoreService(id) {
        await delay(300);
        const index = mockHairServices.findIndex(s => s.id === id);
        if (index === -1) {
            throw new Error('Servicio no encontrado');
        }
        mockHairServices[index].available = true;
        return { 
            data: { 
                message: 'Servicio restaurado correctamente',
                service: mockHairServices[index]
            }
        };
    },

    // Buscar servicios por nombre
    async searchServices(query) {
        await delay(300);
        const services = mockHairServices.filter(service =>
            service.name.toLowerCase().includes(query.toLowerCase()) ||
            service.description.toLowerCase().includes(query.toLowerCase())
        );
        return { data: services };
    },

    // Obtener servicios disponibles
    async getAvailableServices() {
        await delay(300);
        const services = mockHairServices.filter(service => service.available);
        return { data: services };
    },

    // Actualizar precio de un servicio
    async updateServicePrice(id, newPrice) {
        await delay(300);
        const index = mockHairServices.findIndex(s => s.id === id);
        if (index === -1) {
            throw new Error('Servicio no encontrado');
        }
        mockHairServices[index].price = newPrice;
        return { 
            data: { 
                message: 'Precio actualizado correctamente',
                service: mockHairServices[index]
            }
        };
    }
};