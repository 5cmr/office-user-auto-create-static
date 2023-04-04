import service from '@/axios'

const officeApi = {
    getConfig: () => {
        return service.get('/api/v1/office/config')
    },
    create: (data: any) => {
        return service.post('/api/v1/office/config', data)
    }
}

export default officeApi
