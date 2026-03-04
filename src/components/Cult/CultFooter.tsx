import { Box } from "../../blocks"
import CultBanner from "./components/CultBanner"

export const CultFooter = () => {

  return (
    <Box
        display="flex"
        flexDirection={{ initial: 'row', lp: 'column' }}
        alignItems="center"
        justifyContent="space-between"
        gap="spacing-md"
    >
        <CultBanner
            color1="#FDDADB"
            color2="#FF9FA1"
            title="Proof of Devotion"
            description="Your score is based on real impact: Content Reach, Successful Referrals, User Retention, and Overall Quality."
        />
        <CultBanner
            color1="#FDFDDA"
            color2="#FEDFAA"
            title="The 20,000,000 PC Token Harvest"
            description="Survive 12 weeks at the top 50 to claim your share of the 20M PC Tokens and the Ultra Rare Shiny Pass."
        />
    </Box>
  )
}
