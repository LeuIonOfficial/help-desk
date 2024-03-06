import Form from '@/components/Form'
import PageLayout from '@/components/PageLayout'

const Header = () => {
    return <h1>Settings Form</h1>
}

export default function Settings() {
    return (
        <PageLayout>
            <Header />
            <Form />
        </PageLayout>
    )
}
