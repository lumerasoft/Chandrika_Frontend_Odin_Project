import { shallowMount } from '@vue/test-utils';
import AddReview from '@/components/AddReview.vue'

describe('AddReview', () => {
  localStorage.setItem("reviews",JSON.stringify([]))
    it('should mount app', async() => {
      const wrapper = shallowMount(AddReview, {
        global: {
          mocks: {
            $route: {params: { name: ""}},
          }
        }
      })
      expect(wrapper.exists()).toBe(true)
    });

    test('increase review count ', () => {
      const wrapper = shallowMount(AddReview, {
        global: {
          mocks: {
            $route: {params: { name: ""}},
          }
        }
      })
      const button = wrapper.find('button')
      button.trigger('click')
      expect(wrapper.vm.countReviews).toBe(1)
    })

    test('returns reviews', async () => {
      const wrapper = shallowMount(AddReview, {
        global: {
          mocks: {
            $route: {params: { name: ""}},
          }
        }

      })
      review1 = await wrapper.find('input').setValue('nice product')

      await wrapper.find('button').trigger('click')
      localStorage.setItem("reviews",JSON.stringify(review1))
      result1 = localStorage.getItem("reviews")

      expect(wrapper.emitted('create')).toBe('nice product')
    })

});


