<template>
  <div class="dropdown admin-profile">
    <div
      class="d-xxl-flex align-items-center bg-transparent border-0 text-start p-0 cursor dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <div class="flex-shrink-0">
        <img
          class="rounded-circle wh-40 administrator"
          src="~/assets/images/administrator.jpg"
          alt="admin"
        />
      </div>
      <div class="flex-grow-1 ms-2">
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-none d-xxl-block">
            <div class="d-flex align-content-center">
              <h3>Yapi</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="dropdown-menu border-0 bg-white dropdown-menu-end">
      <div class="d-flex align-items-center info">
        <div class="flex-shrink-0">
          <img
            class="rounded-circle wh-30 administrator"
            src="~/assets/images/administrator.jpg"
            alt="admin"
          />
        </div>
        <div class="flex-grow-1 ms-2">
          <h3 class="fw-medium">William John</h3>
          <span class="fs-12">Marketing Manager</span>
        </div>
      </div>

      <ul class="admin-link ps-0 mb-0 list-unstyled">
        <li>
          <NuxtLink
            class="dropdown-item d-flex align-items-center text-body"
            to="/settings/account-settings"
          >
            <i class="material-symbols-outlined">account_circle</i>
            <span class="ms-2">Mes paramètres</span>
          </NuxtLink>
        </li>
      </ul>

      <ul class="admin-link ps-0 mb-0 list-unstyled">
        <li>
          <NuxtLink
            class="dropdown-item d-flex align-items-center text-body"
            to="/authentication/lock-screen"
          >
            <i class="material-symbols-outlined">lock</i>
            <span class="ms-2">Verrouiller session</span>
          </NuxtLink>
        </li>

        <li>
          <NuxtLink
            class="dropdown-item d-flex align-items-center text-body"
            to="/authentication/login"
          >
            <i class="material-symbols-outlined">logout</i>
            <span class="ms-2">Se déconnecter</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminProfile",
};
</script>
