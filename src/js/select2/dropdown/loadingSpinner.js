define([
  'jquery'
], function ($) {

    function LoadingSpinner (decorated, $element, options, dataAdapter) {

        decorated.call(this, $element, options, dataAdapter);

    }

    LoadingSpinner.prototype.getSelectionContainer = function() {

        return this.$element.data().select2.$selection;

    };

    LoadingSpinner.prototype.showLoading = function (decorated, params) {

        // Find the select2 container.
        var $container = this.getSelectionContainer();

        // Try to find an existing spinner..
        var $spinner = $('.select2-loading', $container);

        // Do we not have a spinner?
        if($spinner.length === 0) {

            // Create a new loading spinner.
            $spinner = $('<span>')
                .attr('role', 'presentation')
                .addClass('select2-loading');

            // Add the loading spinner to the element.
            $container.prepend($spinner);

        }

    };

    LoadingSpinner.prototype.hideLoading = function (decorated, params) {

        // Remove the loading spinner, if it exists.
        this.getSelectionContainer().find('.select2-loading').remove();

    };

    return LoadingSpinner;

});
