<template>
  <div class="sidebar-area">
    <div class="logo position-relative">
      <NuxtLink
        to="/dashboard"
        class="d-block text-decoration-none position-relative"
      >
        <img src="~/assets/images/logo-icon.png" alt="logo-icon" />
        <span class="logo-text fw-bold text-dark">GANDOUR</span>
      </NuxtLink>
      <button
        class="sidebar-burger-menu bg-transparent p-0 border-0 opacity-0 z-n1 position-absolute top-50 end-0 translate-middle-y"
        id="sidebar-burger-menu"
        @click="stateStoreInstance.onChange"
      >
        <XIcon class="x"></XIcon>
      </button>
    </div>

    <div class="layout-menu menu-vertical menu hover-scroll-bar">
      <ul class="menu-inner">
        <li class="menu-title small text-uppercase">
          <span class="menu-title-text">MAIN</span>
        </li>
        <li class="menu-item" :class="{ open: isOpen('dashboard') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('dashboard')"
          >
            <span class="material-symbols-outlined menu-icon">dashboard</span>
            <span class="title">Dashboard</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('dashboard')">
            <li class="menu-item">
              <NuxtLink to="/dashboard" class="menu-link"> Dashboard </NuxtLink>
            </li>
          </ul>
        </li>

        <li class="menu-title small text-uppercase">
          <span class="menu-title-text">PAGES</span>
        </li>

        <li class="menu-item" :class="{ open: isOpen('eCommerce') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('eCommerce')"
          >
            <span class="material-symbols-outlined menu-icon">
              shopping_cart
            </span>
            <span class="title">Transfert stocks</span>
            <span class="count">10</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('eCommerce')">
            <li class="menu-item">
              <NuxtLink to="/ecommerce/seller-details" class="menu-link">
                Mes demandes
                <span class="count">3</span>
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/ecommerce/demande-product" class="menu-link">
                Demandes reçues
                <span class="count">7</span>
              </NuxtLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('invoice') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('invoice')"
          >
            <span class="material-symbols-outlined menu-icon">
              content_paste
            </span>
            <span class="title">Demandes</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('invoice')">
            <li class="menu-item">
              <NuxtLink to="/invoices/invoice-list" class="menu-link">
                Gadgets
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/invoices/gratuit-list" class="menu-link">
                Gratuits
              </NuxtLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('users') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('users')"
          >
            <span class="material-symbols-outlined menu-icon">group_add</span>
            <span class="title">Users</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('users')">
            <li class="menu-item">
              <NuxtLink to="/users/users-list" class="menu-link">
                Users List
              </NuxtLink>
            </li>
          </ul>
        </li>

        <li class="menu-title small text-uppercase">
          <span class="menu-title-text">MODULES</span>
        </li>

        <li class="menu-item">
          <NuxtLink to="/notification" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              notifications
            </span>
            <span class="title">Piste d'audit</span>
          </NuxtLink>
        </li>

        <li class="menu-title small text-uppercase">
          <span class="menu-title-text">OTHERS</span>
        </li>

        <li class="menu-item" :class="{ open: isOpen('settings') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('settings')"
          >
            <span class="material-symbols-outlined menu-icon">settings</span>
            <span class="title">Settings</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('settings')">
            <li class="menu-item">
              <NuxtLink to="/settings/account-settings" class="menu-link">
                Account Settings
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/settings/change-password" class="menu-link">
                Change Password
              </NuxtLink>
            </li>
          </ul>
        </li>
        <li class="menu-item">
          <NuxtLink to="/authentication/logout" class="menu-link">
            <span class="material-symbols-outlined menu-icon">logout</span>
            <span class="title">Logout</span>
          </NuxtLink>
        </li>

        <!-- <li class="menu-item" :class="{ open: isOpen('multiLevelMenu') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('multiLevelMenu')"
          >
            <span class="material-symbols-outlined menu-icon">
              keyboard_arrow_down
            </span>
            <span class="title">Multi Level Menu</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('multiLevelMenu')">
            <li
              class="menu-item after-sub-menu menu-level"
              :class="{ open: isOpen('levelOne') }"
            >
              <a
                href="javascript:void(0);"
                class="menu-link menu-toggle"
                @click="toggleMenu('levelOne')"
              >
                <span class="title">Level One</span>
              </a>
              <ul class="menu-sub" v-show="isOpen('levelOne')">
                <li class="menu-item">
                  <NuxtLink to="/#" class="menu-link"> Level Three </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import stateStore from "~/utils/store";

export default defineComponent({
  name: "LeftSidebar",
  setup() {
    const stateStoreInstance = stateStore;

    // Reactive state to track which menu items are open
    const openMenu = ref(null);

    // Method to toggle the menu items
    const toggleMenu = (menu) => {
      // If the same menu is clicked, toggle it; otherwise, open the clicked menu
      openMenu.value = openMenu.value === menu ? null : menu;
    };

    // Method to check if a menu is open
    const isOpen = (menu) => {
      return openMenu.value === menu;
    };

    return {
      stateStoreInstance,
      toggleMenu,
      isOpen,
    };
  },
});
</script>
