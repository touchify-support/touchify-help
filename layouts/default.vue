<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";

const route = useRoute();
const docsNavigation = inject<Ref<ContentNavigationItem[]>>("navigation");
const docsLink = computed(() => flatten_links(docsNavigation?.value ?? []));
const isDocs = computed(() => docsLink.value.findIndex((item) => item.path === route.path) !== -1);

function flatten_links(items: ContentNavigationItem[]): ContentNavigationItem[] {
    return items.flatMap((item) => {
        if (item.children) {
            return flatten_links(item.children);
        }
        return [item];
    });
}
</script>

<template>
    <AppHeader />
    <UMain>
        <slot v-if="!isDocs" />
        <UContainer v-else>
            <UPage>
                <template #left>
                    <UPageAside>
                        <DocsAsideLeftTop />

                        <DocsAsideLeftBody />
                    </UPageAside>
                </template>

                <slot />
            </UPage>
        </UContainer>
    </UMain>
    <AppFooter />
</template>
