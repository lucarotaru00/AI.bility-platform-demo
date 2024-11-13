import { useRouter } from 'next/router'
import SessionInsights from '@/components/SessionInsights'

export default function SessionInsightsPage() {
  const router = useRouter()
  const { sessionId } = router.query

  return <SessionInsights sessionId={sessionId as string} />
}