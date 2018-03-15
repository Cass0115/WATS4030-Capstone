<template>
  <div class="whyDonate">
     <h3>Reasons to Donate</h3>
     <p class="header-paragraph">There are always reasons to give to others in need, here are a couple examples of why helping is so great!</p>
      <ul>
        <li>If You Can't Volunteer: Give
          <p>Volunteering is a great way to help others and be involved with your community, but if you're too busy to volunteer or donate your time, giving money is the perfect workaround.</p>
        </li>
        <li>Bring Meaning to Your Life
          <p>When you donate money to charity, you create opportunities to meet new people who believe in the same causes that inspire you.</p>
        </li>
        <li>Get a Tax Deduction
          <p>If you give to an IRS-approved charity, you can write off donations on your tax return. Donating money is a great way to reduce the amount of money you send off to Uncle Sam, and for a good cause, to boot.</p>
        </li>
        <li>Realize that Every Little Bit Helps
          <p>You don't need $10,000 to make a difference in someone's life. In developing countries, even just a few U.S. dollars could result in a week's worth of meals for a starving child, much-needed medical attention, and even improved schooling.</p>
        </li>
        <li>Experience More Pleasure
          <p>In research conducted by the National Institutes of Health, participants who chose to donate a portion of $100 they were provided enjoyed activated pleasure centers in the brain. Although this experiment was controlled and scientific, it did show that donating money simply makes you feel better, which is something we can all benefit from.</p>
        </li>
      </ul>
    
  </div>
</template>

<script>
export default {
  name: 'WhyDonate',
  data () {
    return {
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  padding-top: 2rem;
}
.header-paragraph{
  font-size: 20px;
  font-weight:300;
  width: 45%;
  margin: 0 auto;
  padding: 32px 0;
}
ul {
  list-style-type: none;
  padding: 10px;;
  text-align: left;
  width: 65%;
  margin: 0 auto;
}
li {
  display: inline-block;
  font-size: 20px;
  padding: 16px 0 8px 0;
}
p{
  font-size: 16px;
  color: #424242;
}
</style>