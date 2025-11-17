import App from "@/App.vue";
import type { Meta, StoryObj } from '@storybook/vue3-vite'


type Story = StoryObj<typeof App>

const meta: Meta<typeof App> = {
    component: App,
    title: 'App'
}

export default meta

export const Default: Story = {}