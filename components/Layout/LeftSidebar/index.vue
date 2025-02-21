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
            <span class="title">Demandes</span>
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
            <span class="title">Invoice</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('invoice')">
            <li class="menu-item">
              <NuxtLink to="/invoices/invoice-list" class="menu-link">
                Invoice List
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/invoices/invoice-details" class="menu-link">
                Invoice Details
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/invoices/create-invoice" class="menu-link">
                Create Invoice
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/invoices/edit-invoice" class="menu-link">
                Edit Invoice
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
              <NuxtLink to="/users/team-members" class="menu-link">
                Team Members
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/users/users-list" class="menu-link">
                Users List
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/users/add-user" class="menu-link">
                Add User
              </NuxtLink>
            </li>
          </ul>
        </li>

        <li class="menu-item" :class="{ open: isOpen('profile') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('profile')"
          >
            <span class="material-symbols-outlined menu-icon">
              account_circle
            </span>
            <span class="title">Profile</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('profile')">
            <li class="menu-item">
              <NuxtLink to="/profile/user-profile" class="menu-link">
                User Profile
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/profile/teams" class="menu-link"> Teams </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/profile/my-projects" class="menu-link">
                Projects
              </NuxtLink>
            </li>
          </ul>
        </li>

        <li class="menu-title small text-uppercase">
          <span class="menu-title-text">MODULES</span>
        </li>

        <li class="menu-item" :class="{ open: isOpen('tables') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('tables')"
          >
            <span class="material-symbols-outlined menu-icon">table</span>
            <span class="title">Tables</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('tables')">
            <li class="menu-item">
              <NuxtLink to="/tables/data-tables" class="menu-link">
                Data Table
              </NuxtLink>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <NuxtLink to="/apex-charts" class="menu-link">
            <span class="material-symbols-outlined menu-icon">donut_large</span>
            <span class="title">Apex Charts</span>
          </NuxtLink>
        </li>

        <li class="menu-item" :class="{ open: isOpen('authentication') }">
          <a
            href="javascript:void(0);"
            class="menu-link menu-toggle active"
            @click="toggleMenu('authentication')"
          >
            <span class="material-symbols-outlined menu-icon">lock</span>
            <span class="title">Authentication</span>
          </a>

          <ul class="menu-sub" v-show="isOpen('authentication')">
            <li class="menu-item">
              <NuxtLink to="/authentication/login" class="menu-link">
                Login
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/authentication/register" class="menu-link">
                Register
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/authentication/reset-password" class="menu-link">
                Reset Password
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/authentication/forget-password" class="menu-link">
                Forget Password
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/authentication/lock-screen" class="menu-link">
                Lock Screen
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/authentication/logout" class="menu-link">
                Log Out
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/authentication/confirm-mail" class="menu-link">
                Confirm Mail
              </NuxtLink>
            </li>
          </ul>
        </li>

        <li class="menu-item">
          <NuxtLink to="/notification" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              notifications
            </span>
            <span class="title">Notification</span>
          </NuxtLink>
        </li>

        <li class="menu-title small text-uppercase">
          <span class="menu-title-text">OTHERS</span>
        </li>

        <li class="menu-item">
          <NuxtLink to="/my-profile" class="menu-link">
            <span class="material-symbols-outlined menu-icon">
              account_circle
            </span>
            <span class="title">My Profile</span>
          </NuxtLink>
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
            <li class="menu-item">
              <NuxtLink to="/settings/connections" class="menu-link">
                Connections
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/settings/privacy-policy" class="menu-link">
                Privacy Policy
              </NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/settings/terms-conditions" class="menu-link">
                Terms & Conditions
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
