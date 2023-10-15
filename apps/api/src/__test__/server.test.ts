import request from 'supertest';
import { afterAll, expect, test } from 'vitest'

import app from '../server'

test('basic server test ', async () => {
    const response = await request(app.callback()).get('/')

    expect(response.statusCode).toBe(200)
})