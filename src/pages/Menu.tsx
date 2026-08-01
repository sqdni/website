import { MENU_ALLERGEN_ICONS, MENU_CATEGORIES } from '../data/menu'
import { useScrollReveal } from '../hooks/useScrollReveal'
import '../styles/menu.css'

export function Menu() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
    delayMs: 120,
    once: false,
  })

  return (
    <section
      ref={ref}
      className={`menu-page${isVisible ? ' menu-page--revealed' : ''}`}
      aria-labelledby="menu-page-heading"
    >
      <header className="menu-page__hero">
        <div className="menu-page__hero-inner">
          <p className="menu-page__eyebrow nav-text">Our Menu</p>
          <h1 id="menu-page-heading" className="menu-page__title">
            Food worth coming back for.
          </h1>
          <p className="menu-page__intro nav-text nav-text--sentence">
            Japanese-inspired comfort food made to create moments. Every plate, every bite.
          </p>
        </div>
      </header>

      <div className="menu-page__content">
        <div className="menu-page__categories">
          {MENU_CATEGORIES.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="menu-page__category"
              aria-labelledby={`menu-cat-${category.id}`}
            >
              <div className="menu-page__category-header">
                <h2 id={`menu-cat-${category.id}`} className="menu-page__category-title">
                  <span aria-hidden="true">{category.emoji}</span> {category.title}
                </h2>
                {category.id === 'plates' ? (
                  <ul className="menu-page__allergen-key" aria-label="Dietary symbol key">
                    {(Object.keys(MENU_ALLERGEN_ICONS) as Array<keyof typeof MENU_ALLERGEN_ICONS>).map(
                      (allergen) => {
                        const meta = MENU_ALLERGEN_ICONS[allergen]
                        return (
                          <li key={allergen} className="menu-page__allergen-key-item">
                            <img
                              src={meta.icon}
                              alt=""
                              className="menu-page__allergen-icon menu-page__allergen-icon--key menu-page__allergen-icon--white-bg"
                            />
                            <span className="menu-page__allergen-key-label nav-text">
                              {meta.label}
                            </span>
                          </li>
                        )
                      },
                    )}
                  </ul>
                ) : null}
              </div>

              <ul className="menu-page__items">
                {category.items.map((item) => (
                  <li key={item.id} className="menu-page__item">
                    {item.image ? (
                      <div className="menu-page__item-media">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="menu-page__item-image"
                          loading="lazy"
                        />
                        {item.badge ? (
                          <span className="menu-page__badge">
                            <span aria-hidden="true">⭐</span> Domo Pick
                          </span>
                        ) : null}
                      </div>
                    ) : item.badge ? (
                      <span className="menu-page__badge menu-page__badge--inline">
                        <span aria-hidden="true">⭐</span> Domo Pick
                      </span>
                    ) : null}
                    <div className="menu-page__item-body">
                      <h3 className="menu-page__item-name">{item.name}</h3>
                      <p className="menu-page__item-desc nav-text nav-text--sentence">
                        {item.description}
                      </p>
                      <div className="menu-page__item-footer">
                        <p className="menu-page__item-price">{item.price}</p>
                        {item.allergens?.length ? (
                          <ul className="menu-page__allergens" aria-label="Dietary labels">
                            {item.allergens.map((allergen) => {
                              const meta = MENU_ALLERGEN_ICONS[allergen]
                              return (
                                <li key={allergen}>
                                  <img
                                    src={meta.icon}
                                    alt={meta.label}
                                    title={meta.label}
                                    className="menu-page__allergen-icon menu-page__allergen-icon--white-bg"
                                  />
                                </li>
                              )
                            })}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
