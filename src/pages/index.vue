<script setup lang="ts">
const { isDark, toggleTheme } = useTheme()
const { message } = useNaive()

const stacks = ['Vue 3', 'TypeScript', 'Vite', 'Pinia', 'UnoCSS', 'Naive UI', 'Vue Router 5']

const features = [
  {
    icon: 'i-tabler-route',
    title: 'File-based Routing',
    description: '基于 src/pages 自动生成路由，减少样板代码。',
  },
  {
    icon: 'i-tabler-palette',
    title: 'Theme Ready',
    description: '内置亮暗主题切换，并与 Naive UI 主题联动。',
  },
  {
    icon: 'i-tabler-bolt',
    title: 'Fast DX',
    description: '自动导入、组件解析和 typed routes 已开箱配置。',
  },
]

function showMessage() {
  message.success('Naive UI message 已经可用。')
}
</script>

<template>
  <main class="home-page">
    <div class="home-aurora home-aurora-primary"></div>
    <div class="home-aurora home-aurora-secondary"></div>

    <section class="home-shell">
      <n-card class="hero-card" :bordered="false">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-kicker">
              <span class="i-tabler-sparkles"></span>
              Simple Vue Starter
            </div>

            <h1>
              Build Vue apps with
              <n-gradient-text type="info">
                less boilerplate
              </n-gradient-text>
            </h1>

            <p class="hero-description">
              一个轻量的 Vue 3 + TypeScript 模板，集成 Naive UI、Pinia、UnoCSS 和 Vue Router 5 文件路由。
            </p>

            <n-space class="hero-actions" align="center">
              <n-button type="primary" size="large" @click="showMessage">
                <template #icon>
                  <span class="i-tabler-message-circle"></span>
                </template>
                Try Message
              </n-button>
              <n-button size="large" secondary @click="toggleTheme">
                <template #icon>
                  <span :class="isDark ? 'i-tabler-sun' : 'i-tabler-moon'"></span>
                </template>
                {{ isDark ? 'Light Mode' : 'Dark Mode' }}
              </n-button>
              <router-link class="about-link" to="/about">
                About
                <span class="i-tabler-arrow-right"></span>
              </router-link>
            </n-space>
          </div>

          <div class="hero-panel">
            <div class="panel-header">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="panel-body">
              <p class="panel-label">
                routes generated
              </p>
              <div class="route-row">
                <span class="i-tabler-file-code"></span>
                <code>src/pages/index.vue</code>
                <strong>/</strong>
              </div>
              <div class="route-row">
                <span class="i-tabler-file-code"></span>
                <code>src/pages/about.vue</code>
                <strong>/about</strong>
              </div>
              <n-divider />
              <div class="panel-footer">
                <span class="i-tabler-circle-check-filled"></span>
                Typed routes ready
              </div>
            </div>
          </div>
        </div>
      </n-card>

      <div class="stack-list">
        <n-tag v-for="stack in stacks" :key="stack" round>
          {{ stack }}
        </n-tag>
      </div>

      <div class="feature-grid">
        <n-card v-for="feature in features" :key="feature.title" class="feature-card" :bordered="false">
          <div class="feature-icon">
            <span :class="feature.icon"></span>
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </n-card>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.home-page {
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  background: var(--app-page-bg);
  transition: background 0.25s ease;
}

.home-shell {
  position: relative;
  z-index: 1;
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  padding: 72px 0;
}

.home-aurora {
  position: absolute;
  border-radius: 999px;
  filter: blur(8px);
  opacity: 0.5;
  pointer-events: none;
}

.home-aurora-primary {
  top: 12%;
  left: 8%;
  width: 180px;
  height: 180px;
  background: rgba(99, 102, 241, 0.28);
}

.home-aurora-secondary {
  right: 10%;
  bottom: 14%;
  width: 220px;
  height: 220px;
  background: rgba(20, 184, 166, 0.22);
}

.hero-card,
.feature-card {
  border: 1px solid var(--app-card-border);
  background: var(--app-card-bg);
  box-shadow: var(--app-card-shadow);
  backdrop-filter: blur(20px);
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  gap: 40px;
  align-items: center;
  padding: 28px;
}

.hero-kicker {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 8px 14px;
  margin-bottom: 22px;
  color: var(--app-primary-color);
  background: var(--app-primary-soft-bg);
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.hero-content h1 {
  max-width: 680px;
  margin: 0;
  color: var(--app-title-color);
  font-size: clamp(42px, 7vw, 76px);
  font-weight: 850;
  line-height: 0.96;
  letter-spacing: -0.06em;
}

.hero-description {
  max-width: 620px;
  margin: 24px 0 0;
  color: var(--app-text-color);
  font-size: 17px;
  line-height: 1.8;
}

.hero-actions {
  margin-top: 32px;
}

.about-link {
  display: inline-flex;
  gap: 6px;
  align-items: center;
  color: var(--app-primary-color);
  font-weight: 700;
  text-decoration: none;
}

.hero-panel {
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.24);
  border-radius: 24px;
  background: rgba(15, 23, 42, 0.92);
  color: #e2e8f0;
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.22);
}

.panel-header {
  display: flex;
  gap: 8px;
  padding: 16px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.16);
}

.panel-header span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fb7185;
}

.panel-header span:nth-child(2) {
  background: #fbbf24;
}

.panel-header span:nth-child(3) {
  background: #34d399;
}

.panel-body {
  padding: 22px;
}

.panel-label {
  margin: 0 0 14px;
  color: #94a3b8;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.route-row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  align-items: center;
  padding: 14px 0;
  color: #cbd5e1;
}

.route-row code {
  color: #e0f2fe;
  font-size: 13px;
}

.route-row strong {
  color: #5eead4;
}

.panel-footer {
  display: flex;
  gap: 8px;
  align-items: center;
  color: #86efac;
  font-weight: 700;
}

.stack-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 26px 0;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.feature-icon {
  display: inline-grid;
  width: 44px;
  height: 44px;
  margin-bottom: 16px;
  place-items: center;
  border-radius: 16px;
  color: var(--app-primary-color);
  background: var(--app-primary-soft-bg);
  font-size: 24px;
}

.feature-card h3 {
  margin: 0 0 8px;
  color: var(--app-title-color);
  font-size: 18px;
}

.feature-card p {
  margin: 0;
  color: var(--app-muted-color);
  line-height: 1.7;
}

@media (max-width: 860px) {
  .home-shell {
    padding: 36px 0;
  }

  .hero-grid,
  .feature-grid {
    grid-template-columns: 1fr;
  }

  .hero-grid {
    padding: 10px;
  }
}
</style>
