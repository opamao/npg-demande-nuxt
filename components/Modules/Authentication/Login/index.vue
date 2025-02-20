<template>
  <div class="m-auto m-1230">
    <div class="row align-items-center">
      <div class="col-lg-6 d-none d-lg-block">
        <img src="~/assets/images/login.jpg" class="rounded-3" alt="login" />
      </div>
      <div class="col-lg-6">
        <div class="mw-480 ms-lg-auto">
          <div class="d-inline-block mb-4">
            <img
              src="~/assets/images/logo.svg"
              class="rounded-3 for-light-logo"
              alt="login"
            />
            <img
              src="~/assets/images/white-logo.svg"
              class="rounded-3 for-dark-logo"
              alt="login"
            />
          </div>
          <h3 class="fs-28 mb-2">Welcome back</h3>
          <p class="fw-medium fs-16 mb-4">
            Sign In with social account or enter your details
          </p>
          <form>
            <div class="form-group mb-4">
              <label class="label text-secondary">Email Address</label>
              <input
                type="email"
                class="form-control h-55"
                placeholder="example@trezo.com"
              />
            </div>
            <div class="form-group mb-4">
              <label class="label text-secondary">Password</label>
              <input
                type="password"
                class="form-control h-55"
                placeholder="Type password"
              />
            </div>
            <div class="form-group mb-4">
              <NuxtLink
                to="/authentication/forget-password"
                class="text-decoration-none text-primary fw-semibold"
              >
                Forgot Password?
              </NuxtLink>
            </div>
            <div class="form-group mb-4">
              <NuxtLink
                to="/dashboard"
                class="btn btn-primary fw-medium py-2 px-3 w-100"
              >
                <div
                  class="d-flex align-items-center justify-content-center py-1"
                >
                  <i class="material-symbols-outlined text-white fs-20 me-2">
                    login
                  </i>
                  <span>Login</span>
                </div>
              </NuxtLink>
            </div>
            <div class="form-group">
              <p>
                Don’t have an account.
                <NuxtLink
                  to="/authentication/register"
                  class="fw-medium text-primary text-decoration-none"
                >
                  Register
                </NuxtLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
});
</script>
