import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PortfolioController::send
 * @see app/Http/Controllers/PortfolioController.php:47
 * @route '/message'
 */
export const send = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: send.url(options),
    method: 'post',
})

send.definition = {
    methods: ["post"],
    url: '/message',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PortfolioController::send
 * @see app/Http/Controllers/PortfolioController.php:47
 * @route '/message'
 */
send.url = (options?: RouteQueryOptions) => {
    return send.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PortfolioController::send
 * @see app/Http/Controllers/PortfolioController.php:47
 * @route '/message'
 */
send.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: send.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PortfolioController::send
 * @see app/Http/Controllers/PortfolioController.php:47
 * @route '/message'
 */
    const sendForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: send.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PortfolioController::send
 * @see app/Http/Controllers/PortfolioController.php:47
 * @route '/message'
 */
        sendForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: send.url(options),
            method: 'post',
        })
    
    send.form = sendForm
const message = {
    send: Object.assign(send, send),
}

export default message