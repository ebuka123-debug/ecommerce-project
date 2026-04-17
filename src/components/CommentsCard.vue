<script setup>
const props = defineProps({
  username: String,
  comment: String,
  date: String
})
</script>

<template>
    <div class="comment-box mb-3 border-bottom mt-3 pb-2">

        <div class="mb-2">
            <font-awesome-icon :icon="['fa','star']" class="text-gold" />
            <font-awesome-icon :icon="['fa','star']" class="text-gold" />
            <font-awesome-icon :icon="['fa','star']" class="text-gold" />
            <font-awesome-icon :icon="['fa','star']" class="text-gold" />
            <font-awesome-icon :icon="['fa','star']" class="text-gold" />
        </div>

        <div class="comment-title mb-2">
            <b>
                {{ username }}
            </b>
        </div>

        <div class="comment-body fs-14">
            <span>
              {{ comment }}
            </span>
        </div>
        <div class="comment-footer mt-2 fs-14 d-flex">
            <span class="text-ash me-2">{{ date }} </span><span class="text-ash"> Powered by</span>
          <b class="fs-14 ms-1">
              Specs
          </b>
          <div id="fullstop" class="rounded-circle ms-1 mt-2"></div>
        </div>
    </div>

</template>
