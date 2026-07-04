import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import SQL from './dev/project/db/sql.tsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <SQL />
        </BrowserRouter>
    </StrictMode>,
)
