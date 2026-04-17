<script setup lang="ts">
const highlights = [
  {
    value: 'Vue 3',
    label: 'Composition API',
  },
  {
    value: 'Router 5',
    label: 'File-based routes',
  },
  {
    value: 'Naive UI',
    label: 'Ready to use',
  },
]
</script>

<template>
  <main class="about-page">
    <section class="about-card">
      <div class="about-badge">
        <span class="i-tabler-info-circle"></span>
        About Template
      </div>

      <h1>一个简洁、现代、可扩展的 Vue 模板</h1>

      <p>
        这个模板保留了项目启动时最常用的能力：类型支持、状态管理、原子化样式、UI 组件和文件路由。
        你可以直接在它之上扩展业务模块，也可以把它作为新项目的基础骨架。
      </p>

      <div class="highlight-grid">
        <div v-for="item in highlights" :key="item.value" class="highlight-item">
          <strong>{{ item.value }}</strong>
          <span>{{ item.label }}</span>
        </div>
      </div>

      <n-space class="about-actions" justify="center">
        <router-link to="/">
          <n-button type="primary" size="large">
            <template #icon>
              <span class="i-tabler-arrow-left"></span>
            </template>
            Back Home
          </n-button>
        </router-link>
        <a href="https://router.vuejs.org/" target="_blank" rel="noreferrer">
          <n-button size="large" secondary>
            Vue Router Docs
          </n-button>
        </a>
      </n-space>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.about-page {
  display: grid;
  min-height: 100vh;
  padding: 32px;
  place-items: center;
  background: var(--app-about-bg);
  transition: background 0.25s ease;
}

.about-card {
  width: min(840px, 100%);
  padding: clamp(32px, 6vw, 68px);
  border: 1px solid var(--app-card-border);
  border-radius: 32px;
  background: var(--app-card-bg);
  box-shadow: var(--app-card-shadow);
  text-align: center;
  backdrop-filter: blur(20px);
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.about-badge {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 8px 14px;
  color: var(--app-teal-color);
  background: var(--app-teal-soft-bg);
  border-radius: 999px;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.about-card h1 {
  max-width: 680px;
  margin: 22px auto 0;
  color: var(--app-title-color);
  font-size: clamp(34px, 6vw, 58px);
  line-height: 1.05;
  letter-spacing: -0.05em;
}

.about-card p {
  max-width: 660px;
  margin: 22px auto 0;
  color: var(--app-text-color);
  font-size: 16px;
  line-height: 1.9;
}

.highlight-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 34px;
}

.highlight-item {
  padding: 20px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 22px;
  background: var(--app-sub-card-bg);
  transition: background 0.25s ease;
}

.highlight-item strong,
.highlight-item span {
  display: block;
}

.highlight-item strong {
  color: var(--app-primary-color);
  font-size: 24px;
}

.highlight-item span {
  margin-top: 6px;
  color: var(--app-muted-color);
}

.about-actions {
  margin-top: 34px;
}

.about-actions a {
  text-decoration: none;
}

@media (max-width: 720px) {
  .about-page {
    padding: 16px;
  }

  .highlight-grid {
    grid-template-columns: 1fr;
  }
}
</style>
