import { Outlet } from 'react-router-dom'


export const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">

            <main className="flex-1 p-4">
                <Outlet /> {/* 페이지 컨텐츠 영역 */}
            </main>

        </div>
    )
}

