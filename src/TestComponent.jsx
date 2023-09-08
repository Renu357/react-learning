import { useEffect } from 'react';

const TestComponent = () => {
    useEffect(() => {
        console.log('Test Component Mounted')

        return () => {
            console.log('Test Component Unmounted')
        } 
    }, [])
    
    return (
        <div>
            <h1>Test Component</h1>
        </div>
    )
}

export default TestComponent;