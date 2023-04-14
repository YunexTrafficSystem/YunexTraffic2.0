import { AppRouter } from "./routes/AppRouter"
import { AppTheme } from "./themes/AppTheme"

export const App = () => {
  return (
    <AppTheme>
        <AppRouter/>
    </AppTheme>
  )
}
