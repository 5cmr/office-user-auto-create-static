import service from '@/axios'

// 公告api
const announcementApi = {
    getDetail: () => {
        return service.get('/api/v1/announcement')
    }
}

export default announcementApi
