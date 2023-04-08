import React, {useEffect, useState} from 'react'
import {Modal} from 'antd'
import announcementApi from "@/services/announcement";

export default function Announcement() {
    const [modalVisible, setModalVisible] = useState(false)
    const [modalText, setModalText] = useState('')

    useEffect(() => {
        announcementApi.getDetail().then(async r => {
            console.log(r.data)
            const data = r.data
            setModalText(data.content)
            setModalVisible(!!data.content)
        })
    }, [])

    return (
        <Modal
            title="公告"
            centered
            open={modalVisible}
            maskClosable={false}
            destroyOnClose
            footer={false}
            onCancel={() => setModalVisible(false)}
        >
            {modalText}
        </Modal>
    )
}

