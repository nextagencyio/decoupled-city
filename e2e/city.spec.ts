import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with city name', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('body')).toContainText('Maplewood')
  })

  test('renders quick links section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('body')).toContainText('Quick Links')
  })

  test('renders navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('nav')).toBeVisible()
    await expect(page.locator('nav a[href="/departments"]').first()).toBeVisible()
    await expect(page.locator('nav a[href="/officials"]').first()).toBeVisible()
    await expect(page.locator('nav a[href="/services"]').first()).toBeVisible()
  })
})

test.describe('Departments', () => {
  test('listing page renders departments', async ({ page }) => {
    await page.goto('/departments')
    await expect(page.locator('h1')).toContainText('Departments')
    await expect(page.locator('body')).toContainText('Public Works')
  })

  test('detail page renders department info', async ({ page }) => {
    await page.goto('/departments/public-works')
    await expect(page.locator('h1')).toContainText('Public Works')
  })
})

test.describe('Officials', () => {
  test('listing page renders officials', async ({ page }) => {
    await page.goto('/officials')
    await expect(page.locator('h1')).toContainText('City Officials')
    await expect(page.locator('body')).toContainText('Patricia Chen')
  })

  test('detail page renders official info', async ({ page }) => {
    await page.goto('/officials/mayor-patricia-chen')
    await expect(page.locator('h1')).toContainText('Patricia Chen')
  })
})

test.describe('Services', () => {
  test('listing page renders services', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('h1')).toContainText('Services')
    await expect(page.locator('body')).toContainText('Building Permits')
  })

  test('detail page renders service info', async ({ page }) => {
    await page.goto('/services/building-permits')
    await expect(page.locator('h1')).toContainText('Building Permits')
  })
})

test.describe('Meetings', () => {
  test('listing page renders meetings', async ({ page }) => {
    await page.goto('/meetings')
    await expect(page.locator('h1')).toContainText('Public Meetings')
    await expect(page.locator('body')).toContainText('Council')
  })

  test('detail page renders meeting info', async ({ page }) => {
    await page.goto('/meetings/city-council-march-2026')
    await expect(page.locator('h1')).toContainText('City Council')
  })
})

test.describe('News', () => {
  test('listing page renders news articles', async ({ page }) => {
    await page.goto('/news')
    await expect(page.locator('h1')).toContainText('News')
    await expect(page.locator('body')).toContainText('Main Street')
  })

  test('detail page renders news article', async ({ page }) => {
    await page.goto('/news/main-street-renovation')
    await expect(page.locator('h1')).toContainText('Main Street')
  })
})

test.describe('Static Pages', () => {
  test('about page renders', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('About')
  })

  test('contact page renders', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('body')).toContainText('Contact')
  })
})
