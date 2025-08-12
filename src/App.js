import './AppStyles.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div style={{ background: '#f5f5f5', minHeight: '100vh' }}>
        <nav className="navbar">
          <img
            src={process.env.PUBLIC_URL + '/The holistic table logo.png'}
            alt="The Holistic Table by KB Logo"
            className="navbar-logo"
          />
          <NavLink to="/" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>About</NavLink>
          <NavLink to="/menu" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>VIP Glow Kitchen</NavLink>
          <NavLink to="/glow-plans" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>The Glow Plans</NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>The Pantry</NavLink>
          {/* <NavLink to="/subscriptions" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Subscriptions</NavLink> */}
          <NavLink to="/services" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>The Holistic Hub</NavLink>
          <NavLink to="/wellness-room" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>The Wellness Room</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Fresh Press</NavLink>
          {/* <NavLink to="/glow-plans" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>The Glow Plans</NavLink> */}
          <NavLink to="/testimonials" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Wellness Wins</NavLink>
          <NavLink to="/faqs" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>FAQs</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}>Let's Connect</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/shop" element={<Shop />} />
          {/* <Route path="/subscriptions" element={<Subscriptions />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/wellness-room" element={<WellnessRoom />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/glow-plans" element={<GlowPlans />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

// Custom Checkout/Booking Page
function Checkout() {
  return (
    <div style={{ padding: 40, maxWidth: 700, margin: '0 auto', fontFamily: 'Lora, Georgia, Times New Roman, serif', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(74,124,89,0.04)' }}>
      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', color: '#4A7C59', marginBottom: 18, textAlign: 'center' }}>Checkout & Booking</h2>
      <div style={{ fontSize: 16, color: '#222', marginBottom: 24, textAlign: 'center' }}>
        Complete your purchase or booking below. (This is a placeholder page—add your payment, subscription, or booking form here.)
      </div>
      <div style={{ background: '#f8f8f8', borderRadius: 14, padding: 32, textAlign: 'center', color: '#888', fontSize: 17 }}>
        <b>Coming Soon:</b> Secure checkout for pantry items, subscriptions, and wellness consultations—all in one place!
      </div>
    </div>
  );
}
// ...existing code...


function GlowPlans() {
  return (
    <div style={{ padding: '48px 16px', maxWidth: 800, margin: '0 auto', fontFamily: 'Lora, Georgia, Times New Roman, serif', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(74,124,89,0.04)' }}>
      <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, Times New Roman, serif', fontSize: '2.2rem', color: '#4A7C59', marginBottom: 24, textAlign: 'center' }}>The Glow Plans</h2>
      <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: '#222', marginBottom: 18, textAlign: 'center' }}>
        Explore our two signature subscriptions: <b>VIP Glow Bowl</b>—a flexible meal plan for fresh, plant-based bowls, and <b>The Ritual Crate</b>—a monthly wellness box with teas, herbs, sea moss, and holistic surprises. Choose the plan that fits your lifestyle and nourish your glow from the inside out!
      </p>
      <ul style={{ fontSize: '1.08rem', lineHeight: 1.7, color: '#222', margin: '0 auto', maxWidth: 600, paddingLeft: 24 }}>
        <li style={{ marginBottom: 16 }}><b>Glow Reset</b>: A 7-day plant-based reset with nourishing meals, herbal teas, and daily wellness tips.</li>
        <li style={{ marginBottom: 16 }}><b>Glow Up</b>: A 21-day transformation plan with meal prep, herbal blends, and lifestyle coaching for lasting results.</li>
        <li style={{ marginBottom: 16 }}><b>Glow for Life</b>: Ongoing support, recipes, and resources for maintaining your glow year-round.</li>
      </ul>

      {/* Ritual Crate Subscription */}
      <div style={{
        background: '#f8f8f8',
        borderRadius: 16,
        boxShadow: '0 2px 12px rgba(74,124,89,0.06)',
        padding: '32px 24px',
        margin: '40px 0',
        maxWidth: 650,
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', marginBottom: 18, textAlign: 'center' }}>
          ✨ The Ritual Crate
        </h3>
        <div style={{ fontSize: 17, color: '#222', marginBottom: 18, textAlign: 'center' }}>
          A monthly wellness experience from The Holistic Table
        </div>
        <div style={{ fontSize: 17, color: '#4A7C59', fontWeight: 700, marginBottom: 10 }}>What’s Inside Each Crate</div>
        <ul style={{ fontSize: 16, color: '#222', marginBottom: 18, paddingLeft: 22 }}>
          <li>1 Wellness Tea Blend (4 oz or 20 tea bags)</li>
          <li>1 Loose Herb (4 oz) with usage guide</li>
          <li>1 Small Sea Moss Gel (8 oz, seasonal flavor)</li>
          <li>1 Recipe Card featuring a nourishing meal or drink</li>
          <li>1 Surprise Holistic Item <span style={{ color: '#888', fontSize: 15 }}>(examples: mini smudge stick, bath soak, herbal salve, journal prompt set)</span></li>
          <li>Exclusive Monthly Tip Sheet — herbal remedies, wellness rituals, seasonal self-care tips</li>
        </ul>
        <div style={{ fontSize: 17, color: '#4A7C59', fontWeight: 700, marginBottom: 10 }}>Subscription Options</div>
        <ul style={{ fontSize: 16, color: '#222', marginBottom: 18, paddingLeft: 22 }}>
          <li><b>1. Monthly Ritual (Billed Monthly):</b> $45/month<br />Free pickup in Colorado Springs<br />$8 flat local delivery (no Denver)</li>
          <li><b>2. Bi-Monthly Ritual (Every 2 Months):</b> $88 every 2 months <span style={{ color: '#888', fontSize: 15 }}>(save $2)</span><br />Same perks as monthly</li>
          <li><b>3. Annual Ritual Membership (Best Value):</b> $480/year <span style={{ color: '#888', fontSize: 15 }}>(save $60 — equivalent to 1 free crate + extra item in your birthday month)</span><br />Early access to new products and seasonal limited runs</li>
        </ul>
        <div style={{ fontSize: 17, color: '#4A7C59', fontWeight: 700, marginBottom: 10 }}>Perks for Subscribers</div>
        <ul style={{ fontSize: 16, color: '#222', marginBottom: 18, paddingLeft: 22 }}>
          <li>10% off all other Holistic Table products year-round</li>
          <li>Priority restock access for limited herbs & seasonal Sea Moss</li>
          <li>Invitation to exclusive online “Ritual Sessions” (mini wellness workshops)</li>
        </ul>
        <div style={{ fontSize: 17, color: '#4A7C59', fontWeight: 700, marginBottom: 10 }}>Cancellation & Pause Policy</div>
        <ul style={{ fontSize: 16, color: '#222', marginBottom: 18, paddingLeft: 22 }}>
          <li>Cancel or pause up to 7 days before next billing date</li>
          <li>Refunds available if canceled within policy timeframe</li>
        </ul>
        <div style={{ fontSize: 17, color: '#4A7C59', fontWeight: 700, marginBottom: 10 }}>Order & Delivery Schedule</div>
        <ul style={{ fontSize: 16, color: '#222', marginBottom: 0, paddingLeft: 22 }}>
          <li><b>Order Deadline:</b> 15th of each month</li>
          <li><b>Crates Ship/Deliver:</b> Last week of the month</li>
        </ul>
        <div style={{ fontSize: 15, color: '#888', marginTop: 18, textAlign: 'center' }}>
          💡 This is designed so:<br />Monthly feels accessible ($45 hits a sweet spot for a luxury wellness box in Colorado)<br />Annual offers the biggest value to lock in long-term customers<br />Each box feels like a mini wellness retreat
        </div>
        <div style={{ textAlign: 'center', marginTop: 28 }}>
          <a href="mailto:info@theholistictable.com?subject=The%20Ritual%20Crate%20Order" style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
            color: '#fff',
            padding: '14px 36px',
            borderRadius: 28,
            fontSize: 20,
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(74,124,89,0.10)'
          }}>Get Your Ritual</a>
        </div>
      </div>

      {/* VIP Glow Bowl Subscription Plans - Coming Soon Overlay */}
      <div style={{
        position: 'relative',
        background: '#f8f8f8',
        borderRadius: 16,
        boxShadow: '0 2px 12px rgba(74,124,89,0.06)',
        padding: '32px 24px',
        margin: '40px 0',
        maxWidth: 650,
        marginLeft: 'auto',
        marginRight: 'auto',
        overflow: 'hidden'
      }}>
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(255,255,255,0.85)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 16
        }}>
          <div style={{ fontSize: 22, color: '#4A7C59', fontWeight: 700, marginBottom: 12, textAlign: 'center' }}>
            VIP Glow Bowl Subscription Plans
          </div>
          <div style={{ fontSize: 17, color: '#b94a48', marginBottom: 18, textAlign: 'center', fontWeight: 600 }}>
            Coming Soon!
          </div>
          <div style={{ fontSize: 16, color: '#222', marginBottom: 18, textAlign: 'center', maxWidth: 400 }}>
            We’re putting the finishing touches on our VIP Glow Bowl subscriptions. Join the waitlist to be the first to know when it launches!
          </div>
          <a href="mailto:info@theholistictable.com?subject=VIP%20Glow%20Bowl%20Waitlist" style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
            color: '#fff',
            padding: '12px 32px',
            borderRadius: 24,
            fontSize: 18,
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(74,124,89,0.10)',
            marginTop: 8
          }}>Join Waitlist</a>
        </div>
        {/* Blurred content underneath */}
        <div style={{
          filter: 'blur(2.5px)',
          pointerEvents: 'none',
          userSelect: 'none',
          opacity: 0.5
        }}>
          <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', marginBottom: 18, textAlign: 'center' }}>
            VIP Glow Bowl Subscription Plans
          </h3>
          <div style={{ fontSize: 17, color: '#222', marginBottom: 18 }}>
            <b>Weekly Subscription (billed every week)</b>
            <ul style={{ marginTop: 8, marginBottom: 16, paddingLeft: 22 }}>
              <li>3 Bowls/week – $30 <span style={{ color: '#888', fontSize: 15 }}>($10 each)</span></li>
              <li>5 Bowls/week – $48 <span style={{ color: '#888', fontSize: 15 }}>($9.60 each)</span></li>
            </ul>
            <b>Bi-Weekly Subscription (billed every 2 weeks)</b>
            <ul style={{ marginTop: 8, marginBottom: 16, paddingLeft: 22 }}>
              <li>6 Bowls every 2 weeks – $58 <span style={{ color: '#888', fontSize: 15 }}>($9.67 each)</span></li>
              <li>10 Bowls every 2 weeks – $92 <span style={{ color: '#888', fontSize: 15 }}>($9.20 each)</span></li>
            </ul>
            <b>Monthly Subscription (billed every month)</b>
            <ul style={{ marginTop: 8, marginBottom: 16, paddingLeft: 22 }}>
              <li>12 Bowls/month – $110 <span style={{ color: '#888', fontSize: 15 }}>($9.17 each)</span></li>
              <li>20 Bowls/month – $180 <span style={{ color: '#888', fontSize: 15 }}>($9 each)</span></li>
            </ul>
          </div>
          <div style={{ fontSize: 17, color: '#4A7C59', fontWeight: 700, marginBottom: 10 }}>Perks for All Subscribers:</div>
          <ul style={{ fontSize: 16, color: '#222', marginBottom: 18, paddingLeft: 22 }}>
            <li>Access to VIP + Coming Soon bowls</li>
            <li>Free sample of a tea blend or loose herb each month</li>
            <li>Priority ordering before public menu drops</li>
          </ul>
          <div style={{ fontSize: 17, color: '#4A7C59', fontWeight: 700, marginBottom: 10 }}>Ordering & Delivery:</div>
          <ul style={{ fontSize: 16, color: '#222', marginBottom: 0, paddingLeft: 22 }}>
            <li><b>Order Deadline:</b> Thursdays by 5 PM</li>
            <li><b>Pickup:</b> Free in Colorado Springs (Saturday)</li>
            <li><b>Delivery:</b> $8 local flat rate (no Denver)</li>
            <li><b>Pause/Cancel:</b> Cancel at least 1 week before next delivery <span style={{ color: '#b94a48', fontWeight: 600 }}>(or you will be charged and no refund will be issued)</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
function Home() {
  return (
    <div>
      <section style={{ textAlign: 'center', padding: '48px 0 32px 0', background: '#f5f5f5' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h1 className="brand-title" style={{ fontSize: '2.8rem', marginBottom: 16 }}>Where Elevated Indulgence Meets Everyday Wellness.</h1>
          <p className="brand-tagline" style={{ fontSize: '1.3rem', marginBottom: 32 }}>
            Rooted in herbal wellness and mindful living, inspiring your journey to vibrant health.
          </p>
          {/* Featured image placeholder */}
          <div style={{ margin: '0 auto 32px auto', maxWidth: 400 }}>
            <img 
              src={process.env.PUBLIC_URL + '/featured-placeholder.jpg'} 
              alt="Featured vegan meal or product" 
              style={{ width: '100%', borderRadius: 18, boxShadow: '0 4px 24px rgba(74,124,89,0.08)' }} 
              onError={e => { e.target.style.display = 'none'; }}
            />
          </div>
          <NavLink to="/shop" className="navbar-link active" style={{
            display: 'inline-block',
            background: '#4A7C59',
            color: '#fff',
            padding: '14px 36px',
            borderRadius: 30,
            fontSize: 20,
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(74,124,89,0.10)',
            marginTop: 12
          }}>
            Shop Now
          </NavLink>
        </div>
      </section>

      {/* Featured Products Section */}
      <section style={{ background: '#fff', padding: '48px 0 56px 0', borderTop: '1px solid #e0e0e0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, Times New Roman, serif', color: '#4A7C59', fontSize: '2rem', marginBottom: 32, textAlign: 'center' }}>
            Featured Products
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
            {/* Product 1 */}
            <NavLink to="/shop#seamoss-gel" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center', transition: 'box-shadow 0.2s', cursor: 'pointer' }}>
                <div style={{ marginBottom: 18 }}>
                  <img src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80" alt="Vitality Glow Seamoss Gel" style={{ width: '100%', borderRadius: 12, height: 160, objectFit: 'cover', background: '#eee' }} />
                </div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, Times New Roman, serif', color: '#4A7C59', fontSize: '1.3rem', marginBottom: 6 }}>Vitality Glow Seamoss Gel – Pineapple Ginger</h3>
                <div style={{ color: '#888', fontSize: 16, marginBottom: 4 }}>$22 <span style={{ fontWeight: 400, fontSize: 14 }}>(16 oz jar)</span></div>
                <div style={{ fontStyle: 'italic', color: '#4A7C59', fontSize: 15, marginBottom: 10 }}>
                  “A tropical boost for your body, beauty, and energy.”
                </div>
                <div style={{ color: '#222', fontSize: 15, marginBottom: 0 }}>
                  Our signature small batch seamoss gel infused with fresh pineapple and warming ginger for a naturally sweet, mineral-rich boost. Perfect for adding to smoothies, teas, or enjoying by the spoonful to support immunity, digestion, and glowing skin.
                </div>
              </div>
            </NavLink>
            {/* Product 2 */}
            <NavLink to="/shop#calm-restore-tea" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center', transition: 'box-shadow 0.2s', cursor: 'pointer' }}>
                {/* Calm & Restore Herbal Tea Blend Photo Placeholder */}
                <div style={{ marginBottom: 18 }}>
                  <div style={{ height: 160, background: '#e0efe6', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 16 }}>
                    Photo Placeholder: Calm & Restore Herbal Tea Blend
                  </div>
                </div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, Times New Roman, serif', color: '#4A7C59', fontSize: '1.3rem', marginBottom: 6 }}>Calm & Restore Herbal Tea Blend</h3>
                <div style={{ color: '#888', fontSize: 16, marginBottom: 4 }}>$12 <span style={{ fontWeight: 400, fontSize: 14 }}>(8 oz loose leaf)</span></div>
                <div style={{ fontStyle: 'italic', color: '#4A7C59', fontSize: 15, marginBottom: 10 }}>
                  “Unwind, sip, and let the day melt away.”
                </div>
                <div style={{ color: '#222', fontSize: 15, marginBottom: 0 }}>
                  A soothing blend of chamomile, lavender, and lemon balm crafted to relax the mind, calm the body, and prepare you for restorative sleep. Sustainably sourced and hand-blended for maximum freshness and potency.
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </section>

    </div>
  );
}
function About() {
  return (
    <div style={{ padding: '48px 16px', maxWidth: 800, margin: '0 auto', fontFamily: 'Lora, Georgia, Times New Roman, serif', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(74,124,89,0.04)' }}>
      {/* Inspiring wellness image (Unsplash, royalty-free) */}
      <div style={{ width: '100%', maxWidth: 600, margin: '0 auto 32px auto' }}>
        <img
          src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=900&q=80"
          alt="Fresh parsley herb on a clean background"
          style={{ width: '100%', borderRadius: 18, boxShadow: '0 4px 24px rgba(74,124,89,0.08)' }}
        />
      </div>
      <h2 style={{ 
        fontFamily: 'Cormorant Garamond, Georgia, Times New Roman, serif', 
        fontSize: '2.2rem', 
        color: '#4A7C59', 
        marginBottom: 24, 
        textAlign: 'center',
        letterSpacing: '1.2px',
        fontWeight: 700
      }}>
        Welcome to Your Holistic Wellness Sanctuary
      </h2>
      <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: '#222', marginBottom: 18 }}>
        The Holistic Table by KB is more than a brand, it’s a sanctuary for those who want to live well, feel well, and do it beautifully. Everything we create is rooted in herbal wisdom, natural wellness practices, and mindful living, brought together with a touch of everyday luxury.
      </p>
      <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: '#222', marginBottom: 18 }}>
        Our story began as KB’s Vegan Kitchen, a beloved local source for fresh, plant-based meals that nourished the body and delighted the taste buds. Over time, we realized our vision was bigger than food alone. It was about creating a full-circle lifestyle experience that embraced herbs, natural remedies, plant-based skincare, and holistic living. That’s when The Holistic Table by KB was born, a refined and elevated evolution of our original passion, blending the best of our food roots with a broader wellness mission.
      </p>
      <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: '#222', marginBottom: 18 }}>
        Our offerings are intentionally crafted in small batches from herbal blends and seamoss infusions to plant-based skincare and nourishing vegan meals, so every product feels personal and purposeful. We choose premium, ethically sourced ingredients that respect both your body and the Earth, ensuring that wellness never comes at the cost of quality.
      </p>
      <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: '#222', marginBottom: 18 }}>
        Here, we believe in turning daily rituals into moments of care. Whether you’re restoring your energy with a herbal tonic, adding vitality with a seamoss creation, or enjoying one of our signature bowls, each experience is designed to elevate your well-being and inspire a deeper connection to yourself.
      </p>
      <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: '#222', marginBottom: 0 }}>
        Welcome to a table where nature, nourishment, and intentional living meet, and you always have a seat.
      </p>

      {/* Learn More Section */}
      <div style={{ marginTop: 48, padding: '32px 0 0 0', borderTop: '1px solid #e0e0e0' }}>
        <h3 
          style={{ 
            fontFamily: 'Cormorant Garamond, Georgia, Times New Roman, serif', 
            fontSize: '2rem', 
            color: '#4A7C59', 
            marginBottom: 16, 
            textAlign: 'center', 
            letterSpacing: '1.5px', 
            textShadow: '0 2px 12px rgba(74,124,89,0.10)',
            background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
            padding: '8px 0'
          }}
        >
          Learn More
        </h3>
        <p style={{ fontSize: '1.08rem', lineHeight: 1.7, color: '#222', marginBottom: 18 }}>
          Curious about our roots, our process, and what makes The Holistic Table by KB unlike anything else?
        </p>
        <div style={{ fontSize: '1.08rem', lineHeight: 1.7, color: '#222', marginBottom: 18, paddingLeft: 0 }}>
          <div style={{ marginBottom: 24 }}>
            <b>How We Transform Herbal Traditions into Modern Wellness Rituals</b>
            <p style={{ margin: '8px 0 0 0' }}>
              At The Holistic Table by KB, herbs aren’t just ingredients, they’re the foundation of every product we create. I am certified in Chinese Medicine and Holistic Health, allowing me to draw on both ancient healing traditions and modern science to craft remedies that truly work. Every blend is intentionally balanced, whether it’s a seamoss infusion rich in minerals or an herbal tea meant to calm your evening routine. My mission is simple, to make holistic wellness practical, luxurious, and effective for the modern world.
            </p>
          </div>
          <div style={{ marginBottom: 24 }}>
            <b>Why Our Products Are Always Crafted in Small Batches for Maximum Potency and Freshness</b>
            <p style={{ margin: '8px 0 0 0' }}>
              We believe in slow-made wellness. That means we prepare every product in small batches so that herbs are vibrant, textures are perfect, and nutrients remain intact. This approach lets us hand-select premium ingredients, avoid unnecessary preservatives, and maintain the kind of quality that mass production can’t match. As a Certified Health and Wellness Coach and Certified Fitness Instructor along with my husband, I ensure that every creation supports balance, nourishment, and lasting vitality. Each jar, bottle, or bowl is the result of patience, precision, and a deep respect for what your body deserves.
            </p>
          </div>
          <div style={{ marginBottom: 24 }}>
            <b>The Journey from KB’s Vegan Kitchen to an Elevated Holistic Lifestyle Brand</b>
            <p style={{ margin: '8px 0 0 0' }}>
              The Holistic Table by KB grew from my passion for wellness into a lifestyle brand that extends far beyond food. While KB’s Vegan Kitchen was loved for its nourishing meals, The Holistic Table embraces a full-circle approach, adding herbal remedies, plant-based skincare, and holistic resources to help people care for themselves inside and out. Guided by my certifications in Chinese Medicine, Holistic Health, Health Coaching, and Fitness Instruction, we have expanded into a space where flavor, beauty, and well-being live side by side.
            </p>
          </div>
          <div style={{ marginBottom: 24 }}>
            <b>Our Commitment to Eco-Conscious Sourcing and Community Wellness</b>
            <p style={{ margin: '8px 0 0 0' }}>
              We see wellness as a relationship between people and the planet. Our herbs and ingredients are sourced from suppliers who prioritize ethical harvesting and sustainable farming. Our packaging is chosen with the environment in mind, from recyclable materials to minimal-waste options. Beyond that, we are committed to education, hosting workshops, sharing resources, and creating opportunities for our community to embrace wellness as a lifelong journey.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <a 
            href="https://voyagedenver.com/interview/meet-keisha-bradley-of-kbs-vegan-kitchen/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              display: 'inline-block',
              background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
              color: '#fff',
              padding: '18px 48px',
              borderRadius: 32,
              fontSize: 24,
              fontWeight: 800,
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(74,124,89,0.13)',
              letterSpacing: '1.2px',
              transition: 'transform 0.15s',
              textAlign: 'center',
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Read more
          </a>
        </div>
      </div>

      {/* Our Story Timeline */}
      <div id="our-story" style={{ marginTop: 48 }}>
        <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, Times New Roman, serif', fontSize: '1.4rem', color: '#4A7C59', marginBottom: 16 }}>Our Story</h3>
        <ul style={{ fontSize: '1.08rem', lineHeight: 1.7, color: '#222', marginBottom: 0, paddingLeft: 24 }}>
          <li><b>2020 – Humble Beginnings in Denver</b><br />In a small apartment in Denver, we began creating vegan meals and nutrient-rich seamoss for friends, family, and local customers, all made with love and delivered straight from our home kitchen.</li>
          <li style={{ marginTop: 12 }}><b>2021 – Hitting the Streets</b><br />We started doing pop-up events across the city, sharing our food and holistic products with new communities. Our dedication and bold flavors soon caught attention, and we were featured in several local magazines for our fresh, intentional approach to wellness.</li>
          <li style={{ marginTop: 12 }}><b>2022 – Changing Lives Through Meal Prep</b><br />Word spread about our nourishing weekly meal preps, and we watched lives transform from busy parents finding healthier eating habits to professionals reclaiming their energy and wellness.</li>
          <li style={{ marginTop: 12 }}><b>2023 – Serving at a Higher Level</b><br />We secured government contracts, one of the most impactful being St. Francis Hospital’s Ornish Program. In this heart-focused lifestyle program, we were the main cook and provider, serving individuals committed to reversing heart disease and improving overall health through plant-based eating, stress management, and movement. We witnessed remarkable progress in participants, from weight loss and lower blood pressure to a renewed joy for life.</li>
          <li style={{ marginTop: 12 }}><b>2025 – The Evolution: The Holistic Table by KB</b><br />After years of growth, impact, and community love, we knew it was time to expand beyond food. Drawing from our herbal knowledge, wellness experience, and creative vision, we evolved into The Holistic Table by KB, a place where herbal remedies, natural skincare, plant-based meals, and mindful living come together in one elevated lifestyle brand.</li>
          <li style={{ marginTop: 12 }}><b>Today – A New Chapter</b><br />With a renewed vision and a deep commitment to helping others live healthier, more balanced lives, we’ve relaunched and refreshed our brand. Our hope is to nourish your body, inspire your mind, and support your journey to wellness, wherever you are.</li>
        </ul>
      </div>
    </div>
  );
}
function Menu() {
  return (
    <div style={{ position: 'relative', padding: '48px 16px', maxWidth: 900, margin: '0 auto', fontFamily: 'Lora, Georgia, Times New Roman, serif', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(74,124,89,0.04)' }}>
      {/* Blurred overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(7px)',
        WebkitBackdropFilter: 'blur(7px)',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
      }}>
        <div style={{
          background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
          color: '#fff',
          padding: '32px 48px',
          borderRadius: 32,
          fontSize: 32,
          fontWeight: 900,
          boxShadow: '0 4px 24px rgba(74,124,89,0.13)',
          letterSpacing: '1.2px',
          textAlign: 'center',
          marginBottom: 18,
        }}>
          VIP Glow Kitchen Launching Soon!
        </div>
        <div style={{ color: '#4A7C59', fontSize: 20, fontWeight: 600, textAlign: 'center', maxWidth: 500, marginBottom: 28 }}>
          We’re putting the finishing touches on our exclusive bowl collection for VIP members. Check back soon for nourishing, chef-crafted meals that glow from the inside out!
        </div>
        <button
          style={{
            background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
            color: '#fff',
            padding: '16px 44px',
            border: 'none',
            borderRadius: 28,
            fontSize: 22,
            fontWeight: 700,
            boxShadow: '0 2px 8px rgba(74,124,89,0.10)',
            cursor: 'pointer',
            marginTop: 8,
            transition: 'transform 0.15s',
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          onClick={() => window.open('mailto:info@theholistictable.com?subject=VIP%20Glow%20Kitchen%20Waitlist', '_blank')}
        >
          Join Waitlist
        </button>
      </div>
      {/* Blurred content below overlay */}
      <div style={{ filter: 'blur(5px)', pointerEvents: 'none', userSelect: 'none' }}>
        <MenuContent />
      </div>
    </div>
  );
}

// Extracted Menu content for clarity and to ensure valid JSX
function MenuContent() {
  return (
    <div>
      <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, Times New Roman, serif', fontSize: '2.2rem', color: '#4A7C59', marginBottom: 24 }}>🌿 The Glow Bowl Collection <span style={{ fontSize: '1.1rem', color: '#888' }}>(Exclusive to The Holistic Table by KB VIP Club)</span></h2>
      {/* Glow Bowls */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>
        {/* Glow Goddess Bowl */}
        <div style={{ flex: '1 1 260px', minWidth: 260, background: '#f8f8f8', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(74,124,89,0.06)' }}>
      <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', marginBottom: 6 }}>Glow Goddess Bowl</h3>
          <div style={{ color: '#222', fontSize: 15, marginBottom: 8 }}>
            Quinoa, roasted sweet potatoes (Creole-spiced), crispy chickpeas, steamed kale, avocado, pomegranate seeds, and tahini-lemon dressing.
          </div>
          <div style={{ fontStyle: 'italic', color: '#4A7C59', fontSize: 14, marginBottom: 10 }}>Vibe: Bold Southern comfort with smoky paprika and garlic warmth.</div>
          <ul style={{ color: '#4A7C59', fontSize: 14, marginBottom: 10, paddingLeft: 18, marginTop: 0 }}>
            <li>Protein &amp; Fiber from quinoa, chickpeas, and kale</li>
            <li>Rich in Antioxidants from pomegranate, kale, and sweet potatoes</li>
            <li>Healthy Fats from avocado and tahini</li>
            <li>Gluten-Free &amp; Vegan</li>
            <li>Creole seasoning adds warmth and depth</li>
          </ul>
          <div style={{ height: 140, background: '#e0efe6', borderRadius: 10, marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 15 }}>
            (Image Placeholder: Bright, colorful bowl with greens, sweet potatoes, and avocado slices)
          </div>
        </div>
        {/* Herbal Harvest Bowl */}
        <div style={{ flex: '1 1 260px', minWidth: 260, background: '#f8f8f8', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(74,124,89,0.06)' }}>
      <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', marginBottom: 6 }}>Herbal Harvest Bowl</h3>
          <div style={{ color: '#222', fontSize: 15, marginBottom: 8 }}>
            Brown rice, grilled zucchini, roasted carrots, marinated lentils, microgreens, hemp seeds, and rosemary-garlic vinaigrette.
          </div>
          <div style={{ fontStyle: 'italic', color: '#4A7C59', fontSize: 14, marginBottom: 10 }}>Vibe: Fresh Mediterranean flavors with herby brightness.</div>
          <ul style={{ color: '#4A7C59', fontSize: 14, marginBottom: 10, paddingLeft: 18, marginTop: 0 }}>
            <li>Plant protein from lentils and hemp seeds</li>
            <li>Mediterranean Diet Inspired</li>
            <li>Anti-Inflammatory herbs rosemary and oregano</li>
            <li>Healthy fats from hemp seeds and olive oil</li>
          </ul>
          <div style={{ height: 140, background: '#e0efe6', borderRadius: 10, marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 15 }}>
            (Image Placeholder: Rustic-style bowl with roasted vegetables and lentils)
          </div>
        </div>
        {/* Immunity Boost Bowl */}
        <div style={{ flex: '1 1 260px', minWidth: 260, background: '#f8f8f8', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(74,124,89,0.06)' }}>
      <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', marginBottom: 6 }}>Immunity Boost Bowl</h3>
          <div style={{ color: '#222', fontSize: 15, marginBottom: 8 }}>
            Wild rice, sautéed broccoli, ginger-garlic mushrooms, roasted beets, pumpkin seeds, and turmeric-citrus dressing.
          </div>
          <div style={{ fontStyle: 'italic', color: '#4A7C59', fontSize: 14, marginBottom: 10 }}>Vibe: Golden, anti-inflammatory power bowl for immune support.</div>
          <ul style={{ color: '#4A7C59', fontSize: 14, marginBottom: 10, paddingLeft: 18, marginTop: 0 }}>
            <li>Immunity Support from citrus, turmeric, and beets</li>
            <li>Anti-Inflammatory from turmeric, ginger, and garlic</li>
            <li>Mineral Rich from pumpkin seeds</li>
            <li>Gut-Friendly fiber from rice, broccoli, and mushrooms</li>
            <li>Bright, energizing flavors</li>
          </ul>
          <div style={{ height: 140, background: '#e0efe6', borderRadius: 10, marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 15 }}>
            (Image Placeholder: Vibrant yellow dressing over hearty grains and veggies)
          </div>
        </div>
      </div>
      {/* Coming Soon */}
      <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', marginBottom: 8 }}>✨ Coming Soon to the Collection</h3>
      <div style={{ marginBottom: 18, fontWeight: 700, color: '#4A7C59', fontSize: '1.05rem', textAlign: 'center', letterSpacing: '1px' }}>(Seasonal and limited drops)</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>
        {/* Island Sunshine Bowl */}
        <div style={{ flex: '1 1 260px', minWidth: 260, background: '#f8f8f8', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(74,124,89,0.06)' }}>
      <h4 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', marginBottom: 6 }}>Island Sunshine Bowl</h4>
          <div style={{ color: '#222', fontSize: 15, marginBottom: 8 }}>
            Coconut rice, jerk-seasoned jackfruit, charred pineapple, black beans, shredded cabbage slaw, mango salsa, and lime-cilantro crema.
          </div>
          <ul style={{ color: '#4A7C59', fontSize: 14, marginBottom: 10, paddingLeft: 18, marginTop: 0 }}>
            <li>Tropical antioxidants from pineapple and mango</li>
            <li>Plant Protein from jackfruit and black beans</li>
            <li>Healthy Fats from lime-cilantro crema</li>
            <li>Fiber-rich coconut rice base</li>
            <li>Immune-boosting vitamin C</li>
          </ul>
          <div style={{ height: 140, background: '#e0efe6', borderRadius: 10, marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 15 }}>
            (Image Placeholder: Island-inspired bowl with jackfruit, pineapple, and vibrant slaw)
          </div>
        </div>
        {/* Green Goddess Detox Bowl */}
        <div style={{ flex: '1 1 260px', minWidth: 260, background: '#f8f8f8', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(74,124,89,0.06)' }}>
      <h4 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', marginBottom: 6 }}>Green Goddess Detox Bowl</h4>
          <div style={{ color: '#222', fontSize: 15, marginBottom: 8 }}>
            Kale, cucumber, avocado, quinoa, spirulina-lime dressing, edamame, and hemp seeds.
          </div>
          <ul style={{ color: '#4A7C59', fontSize: 14, marginBottom: 10, paddingLeft: 18, marginTop: 0 }}>
            <li>Detoxifying greens and spirulina</li>
            <li>Protein from edamame and quinoa</li>
            <li>Healthy fats from avocado</li>
            <li>Rich in chlorophyll for cell health</li>
            <li>Anti-inflammatory dressing</li>
          </ul>
          <div style={{ height: 140, background: '#e0efe6', borderRadius: 10, marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 15 }}>
            (Image Placeholder: Green detox bowl with kale, avocado, and cucumber)
          </div>
        </div>
        {/* Creole Soul Bowl */}
        <div style={{ flex: '1 1 260px', minWidth: 260, background: '#f8f8f8', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(74,124,89,0.06)' }}>
      <h4 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', marginBottom: 6 }}>Creole Soul Bowl</h4>
          <div style={{ color: '#222', fontSize: 15, marginBottom: 8 }}>
            Cajun-spiced red beans, dirty rice, roasted okra, garlicky greens, and smoked paprika aioli.
          </div>
          <ul style={{ color: '#4A7C59', fontSize: 14, marginBottom: 10, paddingLeft: 18, marginTop: 0 }}>
            <li>Protein from red beans</li>
            <li>Bold Cajun spices for flavor</li>
            <li>Fiber-rich dirty rice base</li>
            <li>Antioxidants from roasted okra</li>
            <li>Vegan comfort food classic</li>
          </ul>
          <div style={{ height: 140, background: '#e0efe6', borderRadius: 10, marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 15 }}>
            (Image Placeholder: Soulful Creole bowl with red beans, rice, and okra)
          </div>
        </div>
        {/* Autumn Harvest Glow Bowl (seasonal) */}
        <div style={{ flex: '1 1 260px', minWidth: 260, background: '#f8f8f8', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px rgba(74,124,89,0.06)' }}>
      <h4 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', marginBottom: 6 }}>Autumn Harvest Glow Bowl (seasonal)</h4>
          <div style={{ color: '#222', fontSize: 15, marginBottom: 8 }}>
            Farro, maple-roasted butternut squash, Brussels sprouts, cranberry chutney, pumpkin seeds, and sage tahini dressing.
          </div>
          <ul style={{ color: '#4A7C59', fontSize: 14, marginBottom: 10, paddingLeft: 18, marginTop: 0 }}>
            <li>Seasonal squash and Brussels sprouts rich in vitamins</li>
            <li>Antioxidants from cranberries</li>
            <li>Healthy fats from pumpkin seeds</li>
            <li>Comforting fall flavors</li>
            <li>Balanced carbs, protein, and fat</li>
          </ul>
          <div style={{ height: 140, background: '#e0efe6', borderRadius: 10, marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 15 }}>
            (Image Placeholder: Autumn bowl with squash, Brussels sprouts, and cranberries)
          </div>
        </div>
      </div>
      {/* VIP Club Perks */}
      <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', marginBottom: 12 }}>VIP Club Perks</h3>
      <ul style={{ color: '#222', fontSize: 15, marginBottom: 32, paddingLeft: 24 }}>
        <li>Access to exclusive, rotating Glow Bowls each month</li>
        <li>Priority ordering and guaranteed availability</li>
        <li>Member-only seasonal ingredients and flavors</li>
      </ul>
      {/* Special Notes */}
      <h4 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', marginBottom: 8 }}>Special Notes</h4>
      <ul style={{ color: '#222', fontSize: 15, marginBottom: 0, paddingLeft: 24 }}>
        <li style={{ background: '#fffbe6', border: '1px solid #ffe58f', borderRadius: 10, padding: '12px 18px', marginBottom: 10, color: '#8a6d3b', fontSize: 15, listStyle: 'none' }}>
          <b>Note:</b> VIP Glow Kitchen has limited spots available. If we reach capacity, a waitlist will automatically activate at checkout and you’ll be notified. Thank you for your understanding!
        </li>
        <li>All bowls are 100% vegan & dairy-free</li>
        <li>Gluten-free upon request</li>
        <li>Prepared fresh with premium, small-batch ingredients</li>
      </ul>
    </div>
  );
}
// ...existing code...
function WellnessRoom() {
  return (
    <div style={{ padding: 40, maxWidth: 700, margin: '0 auto', fontFamily: 'Lora, Georgia, Times New Roman, serif', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(74,124,89,0.04)' }}>
      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', color: '#4A7C59', marginBottom: 18, textAlign: 'center' }}>The Wellness Room</h2>
      <div style={{ marginBottom: 32, textAlign: 'center' }}>
        <p style={{ fontSize: '1.15rem', color: '#222', marginBottom: 0 }}>
          Your space for holistic support, guidance, and transformation. Book a 1-on-1 session, join a workshop, or sign up for upcoming classes and events!
        </p>
      </div>

      {/* 1-on-1 Consultations */}
      <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', padding: 28, marginBottom: 32 }}>
        <div style={{ fontSize: 28, marginBottom: 8 }}>🌿 1-on-1 Wellness & Nutrition Consultations</div>
        <div style={{ fontSize: 16, color: '#222', marginBottom: 10 }}>
          Personalized sessions to help you reach your health, nutrition, and lifestyle goals. Whether you’re looking to improve your diet, boost your energy, or create a holistic routine, we’ll craft a plan tailored just for you.
        </div>
  <div style={{ color: '#4A7C59', fontSize: 15, marginBottom: 6 }}>Format: Phone or video call</div>
        <ul style={{ fontSize: 15, color: '#222', marginBottom: 10, paddingLeft: 22 }}>
          <li>Health & lifestyle assessment</li>
          <li>Personalized wellness plan</li>
          <li>Recipe and meal planning suggestions</li>
          <li>Follow up email with resources</li>
        </ul>
        <a href="#" style={{
          display: 'inline-block',
          background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
          color: '#fff',
          padding: '12px 32px',
          borderRadius: 24,
          fontSize: 17,
          fontWeight: 700,
          textDecoration: 'none',
          boxShadow: '0 2px 8px rgba(74,124,89,0.10)',
          marginTop: 8
        }}>Book a Consultation</a>
      </div>

      {/* Workshops */}
      <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', padding: 28, marginBottom: 32 }}>
        <div style={{ fontSize: 24, marginBottom: 8 }}>📅 Workshops <span style={{ color: '#b94a48', fontSize: 15 }}>Coming Soon</span></div>
        <div style={{ fontSize: 16, color: '#222', marginBottom: 10 }}>
          Hands on and interactive sessions where you’ll learn practical skills to enhance your health and wellness. Events will be in person or online depending on the type of workshop.
        </div>
      </div>

      {/* Classes & Special Events */}
      <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', padding: 28, marginBottom: 0 }}>
        <div style={{ fontSize: 24, marginBottom: 8 }}>🎓 Classes & Special Events <span style={{ color: '#b94a48', fontSize: 15 }}>Coming Soon</span></div>
        <div style={{ fontSize: 16, color: '#222', marginBottom: 10 }}>
          Inspiring classes and community events to expand your knowledge, try new wellness practices, and connect with like minded people. Events may be held online or in person depending on the topic and format.
        </div>
  <div style={{ color: '#4A7C59', fontSize: 15, marginBottom: 10 }}>Join the newsletter for upcoming announcements.</div>
        <a href="#" style={{
          display: 'inline-block',
          background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
          color: '#fff',
          padding: '12px 32px',
          borderRadius: 24,
          fontSize: 17,
          fontWeight: 700,
          textDecoration: 'none',
          boxShadow: '0 2px 8px rgba(74,124,89,0.10)',
          marginTop: 8
        }}>Join Newsletter</a>
      </div>
    </div>
  );
}
function Shop() {
  return (
    <div style={{ padding: '48px 16px', maxWidth: 900, margin: '0 auto', fontFamily: 'Lora, Georgia, Times New Roman, serif', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(74,124,89,0.04)' }}>
      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', color: '#4A7C59', marginBottom: 24, textAlign: 'center' }}>The Pantry</h2>
      <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: '#222', margin: '0 auto 32px auto', maxWidth: 650, textAlign: 'center' }}>
        Discover our curated collection of wellness essentials: sea moss gels, herbal teas, superfood mixes, and more. Each product is crafted with premium, plant based ingredients to support your health, energy, and daily rituals. Shop small batch, vegan, and nutrient rich pantry staples for a vibrant, holistic lifestyle.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
  {/* 1. Vitality Glow Seamoss Gel – Pineapple Ginger + Curcumin */}
  <a id="seamoss-gel" href="/checkout" style={{ textDecoration: 'none', color: 'inherit' }}>
  <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center', transition: 'box-shadow 0.2s', cursor: 'pointer' }}>
          <div style={{ marginBottom: 18 }}>
            <div style={{ width: '100%', height: 160, background: '#eee', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', fontSize: 18 }}>
              Image Placeholder
            </div>
          </div>
          <h3 style={{ color: '#4A7C59', fontSize: '1.15rem', marginBottom: 6 }}>Vitality Glow Seamoss Gel – Pineapple Ginger + Curcumin</h3>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 4 }}>8oz – $20 | 16oz – $35</div>
          <div style={{ fontSize: 15, marginBottom: 10 }}>
            A golden burst of plant-powered vitality. Our Pineapple Ginger + Curcumin Seamoss Gel blends wildcrafted seamoss with tropical pineapple, zesty ginger, and anti-inflammatory curcumin for a vibrant wellness boost. Perfect in smoothies, teas, or straight off the spoon.
          </div>
          <div style={{ fontSize: 14, color: '#4A7C59', marginBottom: 6 }}><b>Benefits:</b> Immune support, anti-inflammatory, digestive health, energy boost.</div>
          <div style={{ fontSize: 13, color: '#888' }}><b>Storage:</b> Refrigerate after opening. Lasts 3–4 weeks chilled or freeze for up to 6 months.</div>
  </div>
  </a>
        {/* 2. Radiance Revive Seamoss Gel – Pitaya Infused */}
  <a href="/checkout" style={{ textDecoration: 'none', color: 'inherit' }}>
  <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center', transition: 'box-shadow 0.2s', cursor: 'pointer' }}>
          <div style={{ marginBottom: 18 }}>
            <div style={{ width: '100%', height: 160, background: '#eee', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', fontSize: 18 }}>
              Image Placeholder
            </div>
          </div>
          <h3 style={{ color: '#4A7C59', fontSize: '1.15rem', marginBottom: 6 }}>Radiance Revive Seamoss Gel – Pitaya Infused</h3>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 4 }}>8oz – $22 | 16oz – $37</div>
          <div style={{ fontSize: 15, marginBottom: 10 }}>
            Bright, beautiful, and bursting with antioxidants—this pitaya (dragon fruit) infused seamoss gel supports skin glow, energy, and immunity with every spoonful. Sweet and subtly tropical, it’s the perfect daily wellness ritual.
          </div>
          <div style={{ fontSize: 14, color: '#4A7C59', marginBottom: 6 }}><b>Benefits:</b> Antioxidant-rich, supports skin health, boosts hydration, aids digestion.</div>
          <div style={{ fontSize: 13, color: '#888' }}><b>Storage:</b> Refrigerate after opening. Lasts 3–4 weeks chilled or freeze for up to 6 months.</div>
  </div>
  </a>
  {/* 3. Calm & Restore Herbal Tea Blend */}
  <a id="calm-restore-tea" href="/checkout" style={{ textDecoration: 'none', color: 'inherit' }}>
  <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center', transition: 'box-shadow 0.2s', cursor: 'pointer' }}>
          <div style={{ marginBottom: 18 }}>
            <div style={{ width: '100%', height: 160, background: '#eee', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', fontSize: 18 }}>
              Image Placeholder
            </div>
          </div>
          <h3 style={{ color: '#4A7C59', fontSize: '1.15rem', marginBottom: 6 }}>Calm & Restore Herbal Tea Blend</h3>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 4 }}>4oz Pouch – $15</div>
          <div style={{ fontSize: 15, marginBottom: 10 }}>
            A soothing blend of chamomile, lemon balm, lavender, and spearmint crafted to quiet the mind, relax the body, and restore balance. Perfect for winding down at the end of the day or centering before meditation.
          </div>
          <div style={{ fontSize: 14, color: '#4A7C59', marginBottom: 6 }}><b>Benefits:</b> Stress relief, improved sleep, digestive support.</div>
  </div>
  </a>
        {/* 4. Tropical Vitality Tea – Soursop, Rooibos & Moringa */}
  <a href="/checkout" style={{ textDecoration: 'none', color: 'inherit' }}>
  <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center', transition: 'box-shadow 0.2s', cursor: 'pointer' }}>
          <div style={{ marginBottom: 18 }}>
            <div style={{ width: '100%', height: 160, background: '#eee', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', fontSize: 18 }}>
              Image Placeholder
            </div>
          </div>
          <h3 style={{ color: '#4A7C59', fontSize: '1.15rem', marginBottom: 6 }}>Tropical Vitality Tea – Soursop, Rooibos & Moringa</h3>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 4 }}>4oz Pouch – $17</div>
          <div style={{ fontSize: 15, marginBottom: 10 }}>
            An uplifting, island-inspired blend featuring antioxidant-rich soursop leaf, earthy rooibos, and nutrient-packed moringa. Naturally caffeine-free with a light tropical flavor and a gentle energy lift.
          </div>
          <div style={{ fontSize: 14, color: '#4A7C59', marginBottom: 6 }}><b>Benefits:</b> Immune support, antioxidant boost, anti-inflammatory properties.</div>
  </div>
  </a>
        {/* 5. Loose Herbs – Moringa Leaf */}
        <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center' }}>
          <div style={{ marginBottom: 18 }}>
            <div style={{ width: '100%', height: 160, background: '#eee', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', fontSize: 18 }}>
              Image Placeholder
            </div>
          </div>
          <h3 style={{ color: '#4A7C59', fontSize: '1.15rem', marginBottom: 6 }}>Loose Herbs – Moringa Leaf</h3>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 4 }}>4oz Bag – $12</div>
          <div style={{ fontSize: 15, marginBottom: 10 }}>
            Known as the “miracle tree,” moringa is rich in vitamins, minerals, and amino acids. Add to teas, smoothies, or soups for a nutritional boost.
          </div>
          <div style={{ fontSize: 14, color: '#4A7C59', marginBottom: 6 }}><b>Benefits:</b> Nutrient-dense superfood, energy support, immune health.</div>
        </div>
        {/* 6. Loose Herbs – Burdock Root */}
        <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center' }}>
          <div style={{ marginBottom: 18 }}>
            <div style={{ width: '100%', height: 160, background: '#eee', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', fontSize: 18 }}>
              Image Placeholder
            </div>
          </div>
          <h3 style={{ color: '#4A7C59', fontSize: '1.15rem', marginBottom: 6 }}>Loose Herbs – Burdock Root</h3>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 4 }}>4oz Bag – $14</div>
          <div style={{ fontSize: 15, marginBottom: 10 }}>
            A time-honored herb for detoxification and skin health, burdock root offers earthy depth to teas and tonics.
          </div>
          <div style={{ fontSize: 14, color: '#4A7C59', marginBottom: 6 }}><b>Benefits:</b> Liver support, skin health, anti-inflammatory properties.</div>
        </div>
        {/* 7. Moringa Pancake & Waffle Mix (Vegan) */}
        <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center' }}>
          <div style={{ marginBottom: 18 }}>
            <div style={{ width: '100%', height: 160, background: '#eee', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', fontSize: 18 }}>
              Image Placeholder
            </div>
          </div>
          <h3 style={{ color: '#4A7C59', fontSize: '1.15rem', marginBottom: 6 }}>Moringa Pancake & Waffle Mix (Vegan)</h3>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 4 }}>16oz Bag – $18</div>
          <div style={{ fontSize: 15, marginBottom: 10 }}>
            Wholesome meets delicious—this vegan pancake and waffle mix blends whole grain flour, coconut sugar, and moringa for a subtly sweet, nutrient-packed breakfast. Just add plant milk and a splash of oil for a quick, fluffy stack.
          </div>
          <div style={{ fontSize: 14, color: '#4A7C59', marginBottom: 6 }}><b>Benefits:</b> Antioxidants, plant-based protein, vitamins & minerals.</div>
        </div>
      </div>
    </div>
  );
}
// function Subscriptions() { return <div style={{ padding: 40 }}><h2>Subscriptions</h2><p>Meal plans, wellness boxes, and memberships.</p></div>; }
// ...existing code...
function Services() {
  return (
    <div style={{ padding: '48px 16px', maxWidth: 900, margin: '0 auto', fontFamily: 'Lora, Georgia, Times New Roman, serif', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(74,124,89,0.04)' }}>
      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', color: '#4A7C59', marginBottom: 18, textAlign: 'center' }}>The Holistic Hub</h2>
      <div style={{ maxWidth: 700, margin: '0 auto', marginBottom: 24 }}>
        <p style={{ fontSize: '1.15rem', color: '#222', textAlign: 'center', marginBottom: 18 }}>
          Welcome to your digital wellness library! Discover a curated collection of free and premium resources to support your plant-based journey, holistic self-care, and vibrant living. Download guides, cookbooks, and wellness tools instantly—everything you need to glow from the inside out.
        </p>
        <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', marginBottom: 12, textAlign: 'center' }}>Categories You’ll Find Here</h3>
        <ul style={{ fontSize: 16, color: '#222', marginBottom: 0, paddingLeft: 22, textAlign: 'left', maxWidth: 600, margin: '0 auto' }}>
          <li><b>Cookbooks:</b> Vegan, gluten-free, seasonal eating, and cultural-inspired recipes.</li>
          <li><b>Holistic Guides:</b> Herbal remedies, mindfulness, stress relief, and natural wellness.</li>
          <li><b>Self-Help Books:</b> Goal setting, confidence building, and daily rituals for a balanced life.</li>
        </ul>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center', marginBottom: 40 }}>
        {/* Always Free Resource */}
        <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center', position: 'relative' }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>📚</div>
          <h3 style={{ color: '#4A7C59', fontSize: '1.15rem', marginBottom: 6 }}>7-Day Plant-Powered Kickstart Guide</h3>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 4 }}>FREE (Instant Download)</div>
          <div style={{ fontSize: 15, marginBottom: 10 }}>
            A starter guide for anyone looking to embrace plant-based eating with ease. Includes grocery list, 7 days of simple recipes, and wellness tips for a healthier lifestyle.
          </div>
          <div style={{ color: '#4A7C59', fontSize: 14, marginBottom: 8 }}>Format: PDF Download</div>
          <a href="#" style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
            color: '#fff',
            padding: '12px 32px',
            borderRadius: 24,
            fontSize: 17,
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(74,124,89,0.10)',
            marginTop: 8
          }}>Download Free</a>
        </div>
        {/* Premium Ebook */}
        <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center', position: 'relative' }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>📖</div>
          <h3 style={{ color: '#4A7C59', fontSize: '1.15rem', marginBottom: 6 }}>Glow from Within: The Holistic Vegan Cookbook</h3>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 4 }}>$18 (Instant PDF Download)</div>
          <div style={{ fontSize: 15, marginBottom: 10 }}>
            A beautifully curated ebook with 40+ vibrant vegan recipes, holistic lifestyle tips, herbal remedies, and self-care rituals.
          </div>
          <div style={{ color: '#4A7C59', fontSize: 14, marginBottom: 8 }}>Format: PDF Download</div>
          <a href="#" style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
            color: '#fff',
            padding: '12px 32px',
            borderRadius: 24,
            fontSize: 17,
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(74,124,89,0.10)',
            marginTop: 8
          }}>Buy & Download</a>
        </div>
        {/* Holistic Self-Care Guide */}
        <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center', position: 'relative' }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🛒</div>
          <h3 style={{ color: '#4A7C59', fontSize: '1.15rem', marginBottom: 6 }}>Holistic Self-Care Guide</h3>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 4 }}>$12 (PDF Download)</div>
          <div style={{ fontSize: 15, marginBottom: 10 }}>
            A complete wellness roadmap with daily rituals, herbal tea recipes, affirmations, and stress-reducing practices.
          </div>
          <div style={{ color: '#4A7C59', fontSize: 14, marginBottom: 8 }}>Format: PDF Download</div>
          <a href="#" style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
            color: '#fff',
            padding: '12px 32px',
            borderRadius: 24,
            fontSize: 17,
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(74,124,89,0.10)',
            marginTop: 8
          }}>Buy & Download</a>
        </div>
        {/* Herbal Healing Pantry Guide */}
        <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'center', position: 'relative' }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🛒</div>
          <h3 style={{ color: '#4A7C59', fontSize: '1.15rem', marginBottom: 6 }}>Herbal Healing Pantry Guide</h3>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 4 }}>$9 (PDF Download)</div>
          <div style={{ fontSize: 15, marginBottom: 10 }}>
            Learn how to stock your kitchen with natural, immunity-boosting herbs, spices, and plant-based essentials.
          </div>
          <div style={{ color: '#4A7C59', fontSize: 14, marginBottom: 8 }}>Format: PDF Download</div>
          <a href="#" style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
            color: '#fff',
            padding: '12px 32px',
            borderRadius: 24,
            fontSize: 17,
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(74,124,89,0.10)',
            marginTop: 8
          }}>Buy & Download</a>
        </div>
      </div>
  {/* Categories and description moved to top */}
    </div>
  );
}
// ...existing code...
function Blog() {
  return (
    <div style={{ padding: 0, maxWidth: 900, margin: '0 auto', fontFamily: 'Lora, Georgia, Times New Roman, serif', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(74,124,89,0.04)' }}>
      {/* Hero Section */}
      <div style={{ background: 'linear-gradient(90deg, #e8f5e9 0%, #f8fff8 100%)', borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: '48px 24px 32px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.6rem', color: '#4A7C59', marginBottom: 10 }}>Fresh Press</h2>
        <div style={{ fontSize: '1.25rem', color: '#222', marginBottom: 22 }}>Your go-to source for fresh recipes, wellness tips, and KB’s latest updates.</div>
        <a href="#" style={{
          display: 'inline-block',
          background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
          color: '#fff',
          padding: '14px 38px',
          borderRadius: 28,
          fontSize: 18,
          fontWeight: 700,
          textDecoration: 'none',
          boxShadow: '0 2px 8px rgba(74,124,89,0.10)',
          marginTop: 8,
          marginBottom: 0
        }}>Join the Glow List</a>
      </div>

      {/* Featured/Pinned Post: Glow Goddess Bowl */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 32, background: '#fffbe7', margin: '32px 0 0 0', borderRadius: 16, boxShadow: '0 2px 12px rgba(255,200,80,0.08)', padding: 24, maxWidth: 820, marginLeft: 'auto', marginRight: 'auto' }}>
        <div style={{ width: 140, height: 140, background: '#e0efe6', borderRadius: 12, marginRight: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4A7C59', fontWeight: 600, fontSize: 15, textAlign: 'center' }}>
          (Image Placeholder: Bright, colorful bowl with greens, sweet potatoes, and avocado slices)
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ color: '#b94a48', fontWeight: 700, fontSize: 15, marginBottom: 4 }}>Featured</div>
          <div style={{ fontSize: 22, color: '#4A7C59', fontWeight: 700, marginBottom: 6 }}>Glow Goddess Bowl</div>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 8 }}>August 2025 • VIP Glow Bowls</div>
          <div style={{ fontSize: 15, marginBottom: 10 }}>
            Quinoa, roasted sweet potatoes (Creole-spiced), crispy chickpeas, steamed kale, avocado, pomegranate seeds, and tahini-lemon dressing.<br/>
            <span style={{ fontStyle: 'italic', color: '#4A7C59' }}>Vibe: Bold Southern comfort with smoky paprika and garlic warmth.</span>
          </div>
          <ul style={{ color: '#4A7C59', fontSize: 14, marginBottom: 10, paddingLeft: 18, marginTop: 0 }}>
            <li>Protein &amp; Fiber from quinoa, chickpeas, and kale</li>
            <li>Rich in Antioxidants from pomegranate, kale, and sweet potatoes</li>
            <li>Healthy Fats from avocado and tahini</li>
            <li>Gluten-Free &amp; Vegan</li>
            <li>Creole seasoning adds warmth and depth</li>
          </ul>
          <a href="#" style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
            color: '#fff',
            padding: '10px 24px',
            borderRadius: 20,
            fontSize: 15,
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(74,124,89,0.10)',
            marginTop: 4
          }}>Read More</a>
        </div>
      </div>

      {/* Categories */}
      <div style={{ display: 'flex', gap: 18, justifyContent: 'center', margin: '32px 0 18px 0' }}>
        <div style={{ fontSize: 15, color: '#4A7C59', background: '#e8f5e9', borderRadius: 16, padding: '6px 18px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
          <span role="img" aria-label="Recipes">🥗</span> Recipes
        </div>
        <div style={{ fontSize: 15, color: '#4A7C59', background: '#e8f5e9', borderRadius: 16, padding: '6px 18px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
          <span role="img" aria-label="Wellness Tips">🌱</span> Wellness Tips
        </div>
        <div style={{ fontSize: 15, color: '#4A7C59', background: '#e8f5e9', borderRadius: 16, padding: '6px 18px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
          <span role="img" aria-label="Product Highlights">🛒</span> Product Highlights
        </div>
      </div>

      {/* Latest Posts */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center', marginBottom: 40 }}>
        {/* Blog Card 1 */}
        <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'left', position: 'relative' }}>
          <div style={{ fontSize: 18, color: '#4A7C59', fontWeight: 700, marginBottom: 8 }}>How to Build a Plant Powered Pantry</div>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 10 }}>August 2025 • Wellness Tips</div>
          <div style={{ fontSize: 15, marginBottom: 12 }}>
            Discover the essential ingredients and simple swaps to make your kitchen a hub for vibrant, plant-based meals. Includes a printable checklist!
          </div>
          <a href="#" style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
            color: '#fff',
            padding: '10px 24px',
            borderRadius: 20,
            fontSize: 15,
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(74,124,89,0.10)',
            marginTop: 8
          }}>Read More</a>
        </div>
        {/* Blog Card 2 */}
        <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'left', position: 'relative' }}>
          <div style={{ fontSize: 18, color: '#4A7C59', fontWeight: 700, marginBottom: 8 }}>Herbal Teas for Everyday Wellness</div>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 10 }}>July 2025 • Recipes</div>
          <div style={{ fontSize: 15, marginBottom: 12 }}>
            Simple herbal tea blends to support immunity, relaxation, and digestion. Learn how to brew and blend your own at home.
          </div>
          <a href="#" style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
            color: '#fff',
            padding: '10px 24px',
            borderRadius: 20,
            fontSize: 15,
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(74,124,89,0.10)',
            marginTop: 8
          }}>Read More</a>
        </div>
        {/* Blog Card 3 */}
        <div style={{ background: '#f8f8f8', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, textAlign: 'left', position: 'relative' }}>
          <div style={{ fontSize: 18, color: '#4A7C59', fontWeight: 700, marginBottom: 8 }}>Glow Bowl Meal Prep: 5 Days, 1 Hour</div>
          <div style={{ color: '#888', fontSize: 15, marginBottom: 10 }}>July 2025 • Product Highlights</div>
          <div style={{ fontSize: 15, marginBottom: 12 }}>
            Meal prep made easy! Step-by-step guide to prepping a week of nourishing Glow Bowls with minimal effort and maximum flavor.
          </div>
          <a href="#" style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
            color: '#fff',
            padding: '10px 24px',
            borderRadius: 20,
            fontSize: 15,
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 2px 8px rgba(74,124,89,0.10)',
            marginTop: 8
          }}>Read More</a>
        </div>
      </div>

      {/* Newsletter Signup Block */}
      <div style={{ background: '#e8f5e9', borderRadius: 16, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 600, margin: '0 auto 40px auto', padding: 32, textAlign: 'center' }}>
        <div style={{ fontSize: 18, color: '#4A7C59', fontWeight: 700, marginBottom: 10 }}>Get free recipes, discounts, and wellness tips straight to your inbox.</div>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }} onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Your email address" required style={{ padding: '12px 18px', borderRadius: 20, border: '1px solid #b2dfdb', fontSize: 16, width: 260, marginBottom: 0 }} />
          <button type="submit" style={{
            background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
            color: '#fff',
            padding: '12px 32px',
            borderRadius: 24,
            fontSize: 17,
            fontWeight: 700,
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(74,124,89,0.10)'
          }}>Sign Me Up</button>
        </form>
      </div>
    </div>
  );
}
// ...existing code...
function Testimonials() {
  return (
    <div style={{ padding: 40, maxWidth: 800, margin: '0 auto', fontFamily: 'Lora, Georgia, Times New Roman, serif', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(74,124,89,0.04)' }}>
      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', color: '#4A7C59', marginBottom: 10, textAlign: 'center' }}>Wellness Wins</h2>
      <div style={{ fontSize: '1.15rem', color: '#222', textAlign: 'center', marginBottom: 32 }}>
        Real stories. Real results. See how our sea moss, holistic meals, and wellness products are transforming lives.
      </div>

      {/* Featured Testimonials */}
      <div style={{ marginBottom: 36 }}>
        <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', marginBottom: 18, textAlign: 'center' }}>Featured Testimonials</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
          {/* Testimonial 1 */}
          <div style={{ background: '#f8f8f8', borderRadius: 14, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, marginBottom: 0 }}>
            <div style={{ fontSize: 16, color: '#222', marginBottom: 12, fontStyle: 'italic' }}>
              “The sea moss advanced infinite age helps boost your immunity.”
            </div>
            <div style={{ color: '#4A7C59', fontSize: 15, fontWeight: 700 }}>— Amazon Reviewer</div>
          </div>
          {/* Testimonial 2 */}
          <div style={{ background: '#f8f8f8', borderRadius: 14, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, marginBottom: 0 }}>
            <div style={{ fontSize: 16, color: '#222', marginBottom: 12, fontStyle: 'italic' }}>
              “It’s excellent for easing cold and flu symptoms and boosting the immune system—perfect for the whole family!”
            </div>
            <div style={{ color: '#4A7C59', fontSize: 15, fontWeight: 700 }}>— KB’s Vegan Kitchen Facebook Page</div>
          </div>
          {/* Testimonial 3 */}
          <div style={{ background: '#f8f8f8', borderRadius: 14, boxShadow: '0 2px 12px rgba(74,124,89,0.06)', maxWidth: 340, flex: '1 1 300px', padding: 24, marginBottom: 0 }}>
            <div style={{ fontSize: 16, color: '#222', marginBottom: 12, fontStyle: 'italic' }}>
              “Great for erectile dysfunction and Libido in both Men & Women.”
            </div>
            <div style={{ color: '#4A7C59', fontSize: 15, fontWeight: 700 }}>— Facebook Group Feedback</div>
          </div>
        </div>
      </div>

      {/* Share Your Wellness Story & Rate Products */}
      <div style={{ marginTop: 48, textAlign: 'center' }}>
        <h3 style={{ color: '#4A7C59', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.2rem', marginBottom: 10 }}>Share Your Wellness Story & Rate Our Products</h3>
        <div style={{ fontSize: 16, color: '#222', marginBottom: 18 }}>
          We’d love to hear how The Holistic Table by KB has helped you! Whether it’s a favorite glow bowl, sea moss blend, tea, or pantry item—your story matters. You can also rate any product or subscription you’ve tried!
        </div>
        <a href="#" style={{
          display: 'inline-block',
          background: 'linear-gradient(90deg, #4A7C59 0%, #7BC67E 100%)',
          color: '#fff',
          padding: '14px 38px',
          borderRadius: 28,
          fontSize: 18,
          fontWeight: 700,
          textDecoration: 'none',
          boxShadow: '0 2px 8px rgba(74,124,89,0.10)',
          marginTop: 8,
          marginBottom: 0
        }}>Click Here to Share Your Experience or Rate a Product</a>
        <div style={{ fontSize: 15, color: '#4A7C59', marginTop: 18, marginBottom: 0 }}>
          ⭐️⭐️⭐️⭐️⭐️ <span style={{ color: '#222', fontWeight: 500 }}>Rate any item or subscription you’ve tried!</span>
        </div>
      </div>
    </div>
  );
}
function FAQs() {
  return (
    <div style={{ padding: 40, maxWidth: 700, margin: '0 auto', fontFamily: 'Lora, Georgia, Times New Roman, serif', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(74,124,89,0.04)' }}>
      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', color: '#4A7C59', marginBottom: 18, textAlign: 'center' }}>Frequently Asked Questions</h2>
      <div style={{ fontSize: 16, color: '#222', marginBottom: 28, textAlign: 'center' }}>
        Find answers to our most common questions about products, shipping, subscriptions, and more.
      </div>
      <div style={{ fontSize: 16, color: '#222' }}>
        <ol style={{ paddingLeft: 20 }}>
          <li style={{ marginBottom: 18 }}>
            <b>What is The Holistic Table by KB?</b><br />
            The Holistic Table by KB is your space for plant-powered wellness, offering nourishing recipes, superfood blends, holistic self-care tools, workshops, and resources for living vibrantly.
          </li>
          <li style={{ marginBottom: 18 }}>
            <b>Are all your products natural and vegan?</b><br />
            Yes. Every product at The Holistic Table by KB is plant-based, cruelty-free, and made with high-quality, natural ingredients.
          </li>
          <li style={{ marginBottom: 18 }}>
            <b>Do you ship products?</b><br />
            Yes, we ship select items nationwide. Shipping is calculated at checkout based on your location and order size.
          </li>
          <li style={{ marginBottom: 18 }}>
            <b>How should I store Sea Moss gel and herbal blends?</b><br />
            <b>Sea Moss Gel:</b> Keep refrigerated upon arrival. Lasts 3–4 weeks in the fridge or up to 6 months frozen.<br />
            <b>Herbal Blends:</b> Store in a cool, dry place away from direct sunlight.
          </li>
          <li style={{ marginBottom: 18 }}>
            <b>Will there be workshops or events?</b><br />
            Yes. Our workshops and events may be in-person or online depending on the event. You’ll find the details on our Wellness Room page.
          </li>
          <li style={{ marginBottom: 18 }}>
            <b>Do you offer consultations?</b><br />
            Yes, we provide personalized wellness consultations to help you choose the best products, practices, and nutrition for your needs.
          </li>
          <li style={{ marginBottom: 18 }}>
            <b>Can I subscribe for regular deliveries?</b><br />
            Absolutely. We offer subscription plans for our wellness products so you never miss a dose of your favorites.
          </li>
          <li style={{ marginBottom: 0 }}>
            <b>Do you have free resources?</b><br />
            Yes. The Holistic Hub features a rotating free resource, plus premium guides, cookbooks, and self-care eBooks.
          </li>
        </ol>
      </div>
    </div>
  );
}
function Contact() {
  return (
    <div style={{ padding: 40, maxWidth: 700, margin: '0 auto', fontFamily: 'Lora, Georgia, Times New Roman, serif', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(74,124,89,0.04)' }}>
      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', color: '#4A7C59', marginBottom: 18, textAlign: 'center' }}>Let's Connect</h2>
      <div style={{ fontSize: 16, color: '#222', marginBottom: 28, textAlign: 'center' }}>
        We’d love to hear from you! Whether you have questions about our products, feedback on your experience, or just want to say hello — reach out anytime.
      </div>
      <div style={{ fontSize: 16, color: '#222', marginBottom: 24 }}>
        <b>Phone</b><br />
        <span role="img" aria-label="Phone">📞</span> (XXX) XXX-XXXX (Add your preferred business number here)
      </div>
      <div style={{ fontSize: 16, color: '#222', marginBottom: 24 }}>
        <b>Email</b><br />
        <span role="img" aria-label="Email">📩</span> hello@theholistictablebykb.com
      </div>
      <div style={{ fontSize: 16, color: '#222', marginBottom: 24 }}>
        <b>Follow Us Online</b><br />
        Stay connected for recipes, wellness tips, exclusive discounts, and product launches:<br />
        <div style={{ marginTop: 8 }}>
          <span style={{ display: 'block', marginBottom: 4 }}><b>Instagram:</b> @theholistictablebykb</span>
          <span style={{ display: 'block', marginBottom: 4 }}><b>Facebook:</b> The Holistic Table by KB</span>
          <span style={{ display: 'block', marginBottom: 4 }}><b>Pinterest:</b> HolisticTableByKB</span>
          <span style={{ display: 'block', marginBottom: 4 }}><b>TikTok:</b> @theholistictablebykb</span>
        </div>
      </div>
      <div style={{ fontSize: 16, color: '#222', marginBottom: 0 }}>
        <b>Business Hours</b><br />
        We aim to respond to all inquiries within 24–48 hours (Monday–Friday).
      </div>
    </div>
  );
}

export default App;
