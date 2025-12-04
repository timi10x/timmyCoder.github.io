'use client'

import { motion } from 'framer-motion'
import GitHubActivity from '@/components/shared/GitHubActivity'
import TechStackGraph from '@/components/shared/TechStackGraph'

export default function Visualizations() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-6xl md:text-7xl font-black text-primaryblue mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Data as Art
        </motion.h2>

        <div className="space-y-16">
          {/* GitHub Activity */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primaryivory border-2 border-primaryblue rounded-[10px] p-8"
          >
            <GitHubActivity />
          </motion.div>

          {/* Tech Stack Graph */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <TechStackGraph />
          </motion.div>

          {/* Live Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primaryblue text-white border-2 border-primaryblue rounded-[10px] p-8"
          >
            <h3 className="text-3xl font-black mb-6">Real-Time Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <MetricCard
                value="99.9%"
                label="Uptime"
                icon="⚡"
                trend="+0.1%"
              />
              <MetricCard
                value="<100ms"
                label="API Response"
                icon="🚀"
                trend="-15ms"
              />
              <MetricCard
                value="95"
                label="Lighthouse Score"
                icon="💯"
                trend="+5"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MetricCard({
  value,
  label,
  icon,
  trend,
}: {
  value: string
  label: string
  icon: string
  trend: string
}) {
  return (
    <motion.div
      className="bg-white/10 rounded-[10px] p-6 backdrop-blur-sm"
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-4xl font-black mb-2">{value}</div>
      <div className="text-sm opacity-80 mb-2">{label}</div>
      <div className="text-xs font-bold text-green-300">
        {trend} from last month
      </div>
    </motion.div>
  )
}
